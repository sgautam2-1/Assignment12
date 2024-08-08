import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    title: { control: 'text', defaultValue: 'Section Title' },
    content: { control: 'text', defaultValue: 'This is a section content.' },
    backgroundColor: { control: 'color', defaultValue: '#f9f9f9' },
    titleColor: { control: 'color', defaultValue: '#333' },
    textColor: { control: 'color', defaultValue: '#666' },
    direction: { control: 'select', options: ['column', 'row'], defaultValue: 'column' },
   
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    content: <div>This is a section content.</div>,
    backgroundColor: '#f9f9f9',
    titleColor: '#333',
    textColor: '#666',
    direction: 'column',
   
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Section Title');

    await expect(title).toBeVisible();
  },
};

export const Expanded: Story = {
  args: {
    title: 'Section Title',
    content: <div>This is a section content that is quite long and will be shown when expanded.</div>,
    backgroundColor: '#f9f9f9',
    titleColor: '#333',
    textColor: '#666',
    direction: 'column',
   
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const section = canvas.getByText('Section Title');

    await userEvent.click(section);
    await expect(section.parentElement).toHaveStyle('max-height: 1000px');
  },
};
