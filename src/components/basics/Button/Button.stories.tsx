import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: ComponentMeta<typeof Button> = {
  title: 'basics/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof Button> = {
  args: {
    children: 'Button',
    type: 'button',
    disabled: false,
    isBlock: true,
  },
}
