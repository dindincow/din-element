
import { expect, test, describe, vi, Mocked } from 'vitest'
import { testFn, request } from './utils'

// 模擬第三方庫需引入
import axios from 'axios'
// 非原本的 axios
vi.mock('axios')
const mockAxios = axios as Mocked<typeof axios>


test('測試牛牛的名子', () => {
	const name = 'cow'
	expect(name).toBe('cow')
	expect(2+2).toBe(4)
})

describe('function',()=>{
	test('creact a mock function',()=>{
		// vi.fn() 模擬測試函數
		const callback = vi.fn()
		testFn(12, callback)
		expect(callback).toHaveBeenCalled()
		expect(callback).toHaveBeenCalledWith(12)
	})

	test('spy on method',()=>{
		// spy 監控物件中的方法，執行特定對象後，監控方法是某被調用
		const obj = {
			getName: () => 1	
		}
		// 監控 obj 物件中，name 方法是否被調用
		const spy = vi.spyOn(obj,'getName')
		obj.getName()
		expect(spy).toHaveBeenCalled()
		obj.getName()
		expect(spy).toBeCalledTimes(2)

	})

	test('mock third party module',async()=>{
		// mockResolvedValue 為 mockImplementation 簡寫
		mockAxios.get.mockImplementation(()=>Promise.resolve({data: 123}))
		mockAxios.get.mockResolvedValue({data: 123})

		const result = await request()
		expect(result).toBe(123)
	})
})