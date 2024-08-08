import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Contact from './Contact';
import { ContactProps } from './Contact.types';

export default {
  title: 'Components/Contact',
  component: Contact,
} as Meta;

const Template: StoryFn<ContactProps> = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Show Contact Form');
  await userEvent.click(button);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Show Contact Form');
  await userEvent.click(button);
};
