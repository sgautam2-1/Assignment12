import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    links: {
      control: 'object',
      defaultValue: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
  
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeLink = canvas.getByText('Home');
    const aboutLink = canvas.getByText('About');
    const contactLink = canvas.getByText('Contact');

    await expect(homeLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  },
};

export const Hovered: Story = {
  args: {
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutLink = canvas.getByText('About');
    
    await userEvent.hover(aboutLink);
    
  },
};

export const Active: Story = {
  args: {
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
  
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutLink = canvas.getByText('About');

    await expect(aboutLink).toHaveClass('active');
  },
};

export const Collapsed: Story = {
  args: {
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
  
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeLink = canvas.getByText('Home');
    const aboutLink = canvas.getByText('About');
    const contactLink = canvas.getByText('Contact');

    await expect(homeLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  },
};

export const Disabled: Story = {
  args: {
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
  
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeLink = canvas.getByText('Home');

    await expect(homeLink).toHaveStyle('pointer-events: none');
    await expect(homeLink).toHaveStyle('opacity: 0.5');
  },
};
