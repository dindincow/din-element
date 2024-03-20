
import { expect, test, describe, vi  } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'

describe('Collapse.vue', () => {

	test('测试基础结构以及对应文本', () => {
		const wrapper = mount(Collapse, {
			// 插槽内容
      slots: {
        default: 
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
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


