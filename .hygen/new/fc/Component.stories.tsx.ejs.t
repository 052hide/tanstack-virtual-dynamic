---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---

import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { <%= component_name %> } from './<%= component_name %>'

const meta: ComponentMeta<typeof <%= component_name %>> = {
  title: 'Components/<%= dir %>/<%= component_name %>',
  component: <%= component_name %>,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof <%= component_name %>> = {
  args: {},
}
