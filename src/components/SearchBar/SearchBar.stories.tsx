import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import SearchBar from './SearchBar';
import { SearchBarProps } from './SearchBar.types';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  onSearch: (query: string) => console.log('Search query:', query),
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Search...');
  await userEvent.click(input);
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
};
Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Search...');
  await userEvent.click(input);
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Search...');
  await userEvent.type(input, 'Sample query');
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  onSearch: (query: string) => {
    return new Promise<void>((resolve) => {
      console.log('Search query:', query);
      setTimeout(() => resolve(), 2000);
    });
  },
};
Loading.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Search...');
  await userEvent.type(input, 'Sample query');
  const button = canvas.getByRole('button');
  await userEvent.click(button);
};


