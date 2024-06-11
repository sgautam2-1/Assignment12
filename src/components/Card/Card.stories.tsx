import { Meta, StoryFn } from '@storybook/react';
import CustomCard from './Card';
import { CustomCardProps } from './Card.types';

export default {
  title: 'Components/CustomCard',
  component: CustomCard,
  argTypes: {
    children: { control: 'text', defaultValue: 'Sample Content' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Define an intersection type including backgroundColor
type CustomCardStoryProps = CustomCardProps & { backgroundColor?: string };

const Template: StoryFn<CustomCardStoryProps> = (args) => <CustomCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Content',
  disabled: false,
  backgroundColor: '#ffffff', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Sample Content',
  disabled: true,
  backgroundColor: '#d3d3d3', // Disabled background color
};
