import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: [
      { value: 'pizza', label: 'Pizza' },
      { value: 'tacos', label: 'Tacos' },
      { value: 'sushi', label: 'Sushi' },
      { value: 'icecream', label: 'Ice Cream' },
    ],
    disabled: false,
    backgroundColor: '#ffffff',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.getByTestId('dropdown-container');
    const select = within(dropdown).getByRole('combobox');

    await expect(dropdown).toBeVisible();
    await expect(select).not.toBeDisabled();
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { value: 'pizza', label: 'Pizza' },
      { value: 'tacos', label: 'Tacos' },
      { value: 'sushi', label: 'Sushi' },
      { value: 'icecream', label: 'Ice Cream' },
    ],
    disabled: true,
    backgroundColor: '#d3d3d3',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.getByTestId('dropdown-container');
    const select = within(dropdown).getByRole('combobox');

    await expect(select).toBeDisabled();
  },
};

export const Invisible: Story = {
  args: {
    options: [
      { value: 'pizza', label: 'Pizza' },
      { value: 'tacos', label: 'Tacos' },
      { value: 'sushi', label: 'Sushi' },
      { value: 'icecream', label: 'Ice Cream' },
    ],
    disabled: false,
    backgroundColor: '#ffffff',
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
      { value: 'pizza', label: 'Pizza' },
      { value: 'tacos', label: 'Tacos' },
      { value: 'sushi', label: 'Sushi' },
      { value: 'icecream', label: 'Ice Cream' },
    ],
    disabled: false,
    backgroundColor: '#ffffff',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.getByTestId('dropdown-container');

    // Simulate hover by adding a class
    dropdown.classList.add('hover');
    await userEvent.hover(dropdown);
    await expect(dropdown).toHaveStyle('background-color: rgb(255, 255, 255)'); 
  },
};

export const SelectOption: Story = {
  args: {
    options: [
      { value: 'pizza', label: 'Pizza' },
      { value: 'tacos', label: 'Tacos' },
      { value: 'sushi', label: 'Sushi' },
      { value: 'icecream', label: 'Ice Cream' },
    ],
    disabled: false,
    backgroundColor: '#ffffff',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');

    await userEvent.selectOptions(select, 'tacos');

    await expect(select).toHaveValue('tacos');
  },
};
