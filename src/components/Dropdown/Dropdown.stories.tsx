import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps, Option } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'pizza', label: 'Pizza' },
    { value: 'tacos', label: 'Tacos' },
    { value: 'sushi', label: 'Sushi' },
    { value: 'icecream', label: 'Ice Cream' },
  ],
  disabled: false,
  backgroundColor: '#ffffff', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: 'pizza', label: 'Pizza' },
    { value: 'tacos', label: 'Tacos' },
    { value: 'sushi', label: 'Sushi' },
    { value: 'icecream', label: 'Ice Cream' },
  ],
  disabled: true,
  backgroundColor: '#d3d3d3', // Disabled background color
};
