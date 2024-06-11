import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Click Me!' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me!',
  disabled: false,
  backgroundColor: '#4CAF50', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'I am Disabled',
  disabled: true,
  backgroundColor: '#A9A9A9', // Disabled background color
};
