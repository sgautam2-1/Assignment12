
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Click Me!' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click Me!',
    disabled: false,
    backgroundColor: '#4CAF50',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const Disabled: Story = {
  args: {
    children: 'I am Disabled',
    disabled: true,
    backgroundColor: '#A9A9A9',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await expect(button).toBeDisabled();
  },
};

export const Invisible: Story = {
  args: {
    children: 'You Can\'t See Me!',
    disabled: false,
    backgroundColor: '#4CAF50',
    visible: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.queryByRole('button');

    await expect(button).toBeNull();
  },
};


export const Clickable: Story = {
  args: {
    children: 'Click Me!',
    disabled: false,
    backgroundColor: '#4CAF50',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);
    await expect(button).toHaveTextContent('Click Me!');
  },
};
