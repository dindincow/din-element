
import { expect, test, describe, vi  } from 'vitest'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import Icon from '@/components/Icon/Icon.vue'

/**
 * classes(): classes(): 拿到 DOM 節點一系列 class, 使用 toContain 看看是否有包含這個 class
 * get(): 遍利 對應的 wrapper
 */

describe('Button.vue',()=>{
	test('basic Button',()=>{
		const wrapper = mount(Button, {
			props:{
				type:'primary'
			},
			slots:{
				default:'button'
			}
		})
		console.log(wrapper.html)

		expect(wrapper.classes()).toContain('vk-button--primary')
		
		// slot
		// get, find DOM 節點
		expect(wrapper.get('button').text()).toBe('button')

		// event
		wrapper.get('button').trigger('click')
		console.log(wrapper.emitted())
		expect(wrapper.emitted()).toHaveProperty('click')
	})

	test('disable',()=>{
		const wrapper = mount(Button, {
			props:{
				disabled:true
			},
			slots:{
				default:'disabled'
			}
		})
		expect(wrapper.attributes('disabled')).toBeDefined()
		expect(wrapper.find('button').element.disabled).toBeDefined()

		wrapper.get('button').trigger('click')
		expect(wrapper.emitted()).not.toHaveProperty('click')
	})

	test('icon',()=>{
		const wrapper = mount(Button, {
			props:{
				icon:'arrow-up'
			},
			slots:{
				default:'icon'
			},
			global:{
				stubs:['FontAwesomeIcon'] /* mock 掉第三地方組件*/
			}
		})

		/* findComponent 找組件*/
		const iconElement = wrapper.findComponent(FontAwesomeIcon)
		expect(iconElement.exists()).toBeTruthy()
		expect(iconElement.attributes('icon')).toBe('arrow-up')
	})

	test('loading',()=>{
		const wrapper = mount(Button, {
			props:{
				loading:true
			},
			slots:{
				default:'loading'
			},
			global:{
				stubs:['Icon'] /* mock 掉第三地方組件*/
			}
		})

		/* findComponent 找組件*/
		const iconComponent = wrapper.findComponent(Icon)
		expect(iconComponent.exists()).toBeTruthy()
		expect(iconComponent.attributes('icon')).toBe('spinner')
		expect(wrapper.attributes('disabled')).toBeDefined()
		
	})
})