import { expect, test } from '@playwright/experimental-ct-vue'
import CodeBlock from '../CodeBlock.vue'
import { lowlight } from 'lowlight/lib/all'

test('MyFoo', async ({ mount }) => {
  const component = await mount(CodeBlock, { props: { code: 'console.log("Hello, World!")' } })
  await expect(component).toHaveText(JSON.stringify(lowlight.highlightAuto('console.log("Hello, World!")')))
})
