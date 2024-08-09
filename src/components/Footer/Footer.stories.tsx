import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    socialLinks: {
      control: 'object',
      defaultValue: [
        { href: 'https://twitter.com', label: 'Twitter' },
        { href: 'https://linkedin.com', label: 'LinkedIn' },
      ],
    },
    miniNavLinks: {
      control: 'object',
      defaultValue: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    privacyPolicy: { control: 'text', defaultValue: '© 2024 Your Name. All rights reserved.' },
    backgroundColor: { control: 'color', defaultValue: '#333' },
    textColor: { control: 'color', defaultValue: '#fff' },
    linkColor: { control: 'color', defaultValue: '#fff' },
    hoverColor: { control: 'color', defaultValue: '#aaa' },
    disabled: { control: 'boolean', defaultValue: false },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    socialLinks: [
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
    miniNavLinks: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    privacyPolicy: '© 2024 Your Name. All rights reserved.',
    backgroundColor: '#333',
    textColor: '#fff',
    linkColor: '#fff',
    hoverColor: '#aaa',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const twitterLink = canvas.getByText('Twitter');
    const linkedinLink = canvas.getByText('LinkedIn');
    const homeLink = canvas.getByText('Home');
    const privacyText = canvas.getByText('© 2024 Your Name. All rights reserved.');

    await expect(twitterLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
    await expect(homeLink).toBeVisible();
    await expect(privacyText).toBeVisible();
  },
};

export const Disabled: Story = {
  args: {
    socialLinks: [
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
    miniNavLinks: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    privacyPolicy: '© 2024 Your Name. All rights reserved.',
    backgroundColor: '#333',
    textColor: '#fff',
    linkColor: '#fff',
    hoverColor: '#aaa',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const twitterLink = canvas.getByText('Twitter');

    await expect(twitterLink).toHaveStyle('pointer-events: none');
 
  },
};

export const Hovered: Story = {
  args: {
    socialLinks: [
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
    miniNavLinks: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    privacyPolicy: '© 2024 Your Name. All rights reserved.',
    backgroundColor: '#333',
    textColor: '#fff',
    linkColor: '#fff',
    hoverColor: '#aaa',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const twitterLink = canvas.getByText('Twitter');

    await userEvent.hover(twitterLink);
    
  },
};
