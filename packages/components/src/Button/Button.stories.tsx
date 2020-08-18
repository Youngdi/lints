import { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { Button } from '.';
import type { ButtonProps } from '.';

type _ButtonProps = PropsWithChildren<ButtonProps>;

export default {
  title: 'Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<_ButtonProps>;

const Template: Story<_ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'button',
  type: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
  type: 'primary',
};

export const Text = Template.bind({});
Text.args = {
  children: 'button',
  type: 'text',
};
