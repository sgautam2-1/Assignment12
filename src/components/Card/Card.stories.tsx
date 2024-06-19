import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { CustomCardProps } from './Card.types';

export default {
  title: 'Components/CustomCard',
  component: Card,
  argTypes: {
    children: { control: 'text', defaultValue: 'Content' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Define an intersection type including backgroundColor
type CustomCardStoryProps = CustomCardProps & { backgroundColor?: string };

const Template: StoryFn<CustomCardStoryProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Maybe try hovering over me. ',
  disabled: false,
  backgroundColor: '#ffffff', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: ':"(',
  disabled: true,
  backgroundColor: '#d3d3d3', // Disabled background color
};
