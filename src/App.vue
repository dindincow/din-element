<template>
  <a href="#" class="link">LINK</a>
  <font-awesome-icon icon="user-secret" />
  <font-awesome-icon icon="fa-solid fa-user-secret" />
  <font-awesome-icon icon="user-secret" />
  <font-awesome-icon :icon="['fas', 'user-secret']" />
  <h1 class="link">TITLE</h1>
  <Button plain>Plain Button</Button>
  <Button round>Round Button</Button>
  <Button circle>VK</Button>
  <Button disabled>Disabled Button</Button><br /><br />
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button><br /><br />
  <Button type="primary" plain>Primary</Button>
  <Button type="success" plain>Success</Button>
  <Button type="info" plain>Info</Button>
  <Button type="warning" plain>Warning</Button>
  <Button type="danger" plain>Danger</Button><br /><br />
  <Button size="large">Large</Button>
  <Button size="small">Small</Button><br /><br />
  <Button size="large" loading>Loading</Button>
  <Button size="large" icon="arrow-up">Icon</Button><br /><br />

  <Collapse v-model="openedValue">
    <CollapseItem name="a">
      <template #title> 使用 SLOTE TITLE </template>
      <div>這是內容A</div>
    </CollapseItem>
    <CollapseItem name="b" title="TITLEB">
      <div>這是內容B</div>
    </CollapseItem>
    <CollapseItem name="c" title="TITLEC" disabled>
      <div>這是內容C</div>
    </CollapseItem>
  </Collapse>

  <Icon icon="user-secret" size="2xl" type="danger" color="red" />
  <Icon icon="arrow-up" :size="sizeStyle" spin />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'

import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'

import Icon from './components/Icon/Icon.vue'

const buttonRef = ref<ButtonInstance | null>(null)
const openedValue = ref(['a'])
const sizeStyle = ref<any>('3x')

onMounted(() => {
  if (buttonRef.value) {
    console.log('onMounted', buttonRef.value.ref)
  }
  // setTimeout(() => {
  //   openedValue.value = ['a', 'b']
  //   sizeStyle.value = '2xl'
  // }, 2000)
})
</script>

<style lang="scss">
.link {
  color: var(--vk-color-primary);
}
.title {
  color: var(--vk-color-primary);
}
</style>
