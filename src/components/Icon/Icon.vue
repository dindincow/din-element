<template>
  <i class="vk-icon" :class="{ [`vk-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
    <FontAwesomeIcon v-bind="filteredProps"></FontAwesomeIcon>
  </i>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
defineOptions({
  name: 'VkIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  console.log('props.color', props.color)
  return props.color ? { color: props.color } : {}
})
</script>

<style lang="css" scoped></style>
