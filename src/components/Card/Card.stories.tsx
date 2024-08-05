import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text', defaultValue: 'Card Title' },
    description: { control: 'text', defaultValue: 'This is a card description.' },
    imageUrl: { control: 'text', defaultValue: 'https://via.placeholder.com/150' },
    visible: { control: 'boolean', defaultValue: true },
    disabled: { control: 'boolean', defaultValue: false },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a card description.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: true,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');

    await expect(card).toBeVisible();
    await expect(card).not.toHaveStyle('opacity: 0.5');
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'This card is disabled.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: true,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');

    await expect(card).toHaveStyle('opacity: 0.5');
    await expect(card).toHaveStyle('pointer-events: none');
  },
};

export const Invisible: Story = {
  args: {
    title: 'Invisible Card',
    description: 'You cannot see this card.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.queryByTestId('card-container');

    await expect(card).toBeNull();
  },
};

export const Hover: Story = {
  args: {
    title: 'Hover Card',
    description: 'Hover over this card to see the effect.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: true,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');

  
    await userEvent.hover(card);

  },
};
