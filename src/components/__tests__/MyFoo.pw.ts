import { expect, test } from '@playwright/experimental-ct-vue'
import MyFoo from '../MyFoo.vue'

test('MyFoo', async ({ page, mount }) => {
  const eventPromise = page.waitForEvent('console')
  await mount(MyFoo, { props: { msg: 'Hello' }, on: { foo: () => {} } })
  const event = await eventPromise
  await expect(event.text()).toEqual(`%o {msg: Hello, onFoo: [Function: foo]}`)
})
