import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SampleForm } from './SampleForm'

const meta: ComponentMeta<typeof SampleForm> = {
  title: 'Components/features/sample/SampleForm',
  component: SampleForm,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof SampleForm> = {
  args: {},
}
