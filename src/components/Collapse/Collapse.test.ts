
import { expect, test, describe, vi  } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'

describe('Collapse.vue', () => {

	test('测试基础结构以及对应文本', () => {
		const qq = mount(()=>
		<Collapse v-model="openedValue"></Collapse>,{
			global:{
				stubs:['FontAwesomeIcon'] /* mock 掉第三地方組件*/
			}
		})
			

		const wrapper = mount(Collapse, {
			// 插槽内容
      slots: {
        default:`
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
				`
      },
			global:{
				stubs:['FontAwesomeIcon'] /* mock 掉第三地方組件*/
			}
  	})

		console.log('wrapper===>',wrapper.html())

		const headers = wrapper.findAll('.vk-collapse-item__header')
    const contents = wrapper.findAll('.vk-collapse-item__wrapper')

		expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
	})
})


