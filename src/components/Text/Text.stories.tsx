
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Sample Text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a sample text',
    disabled: false,
    backgroundColor: '#f0e68c',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('This is a sample text');

    await expect(text).toBeVisible();
    await expect(text).not.toHaveStyle('color: grey');
  },
};

export const Disabled: Story = {
  args: {
    children: 'This text is disabled',
    disabled: true,
    backgroundColor: '#d3d3d3',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('This text is disabled');

    await expect(text).toHaveStyle('color: rgb(128, 128, 128)');
    await expect(text).toHaveStyle('cursor: auto');
  },
};

export const Invisible: Story = {
  args: {
    children: 'You should not see this text',
    disabled: false,
    backgroundColor: '#f0e68c',
    visible: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.queryByText('You should not see this text');

    await expect(text).toBeNull();
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover over this text',
    disabled: false,
    backgroundColor: '#f0e68c',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('Hover over this text');

    await userEvent.hover(text);
    await expect(text).toHaveStyle('color: rgb(138, 43, 226)'); 
  },
};
