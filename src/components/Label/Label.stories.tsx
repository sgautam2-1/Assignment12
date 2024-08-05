import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text', defaultValue: 'Sample Label' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color', defaultValue: '#ffffe0' },
    visible: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'This is a sample label',
    disabled: false,
    backgroundColor: '#ffffe0',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('This is a sample label');

    await expect(label).toBeVisible();
    await expect(label).not.toHaveStyle('opacity: 0.5');
  },
};

export const Disabled: Story = {
  args: {
    children: 'This label is disabled',
    disabled: true,
    backgroundColor: '#d3d3d3',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('This label is disabled');

    await expect(label).toHaveStyle('opacity: 0.5');
    await expect(label).toHaveStyle('color: #a9a9a9');
  },
};

export const Invisible: Story = {
  args: {
    children: 'You should not see this label',
    disabled: false,
    backgroundColor: '#ffffe0',
    visible: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.queryByText('You should not see this label');

    await expect(label).toBeNull();
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover over this label',
    disabled: false,
    backgroundColor: '#ffffe0',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Hover over this label');

    await userEvent.hover(label);
    await expect(label).toHaveStyle('background-color: rgb(255, 255, 224)'); 
  },
};
