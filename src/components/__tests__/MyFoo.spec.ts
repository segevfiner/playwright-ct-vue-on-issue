import { afterEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MyFoo from '../MyFoo.vue'

afterEach(() => {
  vi.restoreAllMocks()
})

test('MyFoo', () => {
  const spy = vi.spyOn(console, 'log')
  const handleFoo = () => {}
  mount(MyFoo, { props: { msg: 'Hello', onFoo: handleFoo } })
  expect(spy).toHaveBeenCalledWith('%o', { msg: 'Hello', onFoo: handleFoo })
})
