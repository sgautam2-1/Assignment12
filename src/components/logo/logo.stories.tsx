import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Logo from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    src: { control: 'text', defaultValue: 'logo.png' },
    alt: { control: 'text', defaultValue: 'Logo' },
    size: { control: 'text', defaultValue: '50px' },
    disabled: { control: 'boolean', defaultValue: false },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    src: 'logo.png',
    alt: 'Logo',
    size: '50px',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logo = canvas.getByAltText('Logo');

    await expect(logo).toBeVisible();
    await userEvent.click(logo);
    await expect(logo).toBeVisible();
  },
};

export const Disabled: Story = {
  args: {
    src: 'logo.png',
    alt: 'Logo',
    size: '50px',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logo = canvas.getByAltText('Logo');

    await expect(logo).toBeVisible();
    await expect(logo).toHaveStyle('cursor: not-allowed');
    await expect(logo).toHaveStyle('opacity: 0.5');
    await userEvent.click(logo);
    // Since it's disabled, no action should occur
  },
};
