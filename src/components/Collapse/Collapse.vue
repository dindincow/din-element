<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'VkCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)

// 點擊 TITLE 處發內容收合
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    // 如果有再展開的內容中，須關閉;反之打開
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

// 提供給子組件用，因為父組件使用 slot 所以必須用 provide 傳給子組件
provide(collapseContextKey, {
  handleItemClick,
  activeNames
})
</script>

<style lang="css" scoped></style>
