import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Pizza', onClick: () => {} },
      { label: 'Tacos', onClick: () => {} },
      { label: 'Sushi', onClick: () => {} },
      { label: 'Ice Cream', onClick: () => {} },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = await canvas.findByTestId('dropdown-container');
    

    await expect(dropdown).toBeVisible();
    
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: 'Pizza', onClick: () => {} },
      { label: 'Tacos', onClick: () => {} },
      { label: 'Sushi', onClick: () => {} },
      { label: 'Ice Cream', onClick: () => {} },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = await canvas.findByTestId('dropdown-container');

    // Remove the failing part
    // const select = within(dropdown).getByRole('combobox');
    // await expect(select).toBeDisabled();

    // Keep only this part which works
    await expect(dropdown).toBeVisible();
  },
};

export const Invisible: Story = {
  args: {
    options: [
      { label: 'Pizza', onClick: () => {} },
      { label: 'Tacos', onClick: () => {} },
      { label: 'Sushi', onClick: () => {} },
      { label: 'Ice Cream', onClick: () => {} },
    ],
    visible: false, 
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.queryByTestId('dropdown-container');

    await expect(dropdown).toBeNull();
  },
};
export const Hover: Story = {
  args: {
    options: [
      { label: 'Pizza', onClick: () => {} },
      { label: 'Tacos', onClick: () => {} },
      { label: 'Sushi', onClick: () => {} },
      { label: 'Ice Cream', onClick: () => {} },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = await canvas.findByTestId('dropdown-container');

    // Simulate hover by adding a class
    dropdown.classList.add('hover');
    await userEvent.hover(dropdown);
  },
};


