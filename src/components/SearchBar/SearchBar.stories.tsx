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
  onSearch: (query: string) => {
    if (!query) {
      alert('No search query entered.');
    } else {
      console.log('Search query:', query);
    }
  },
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Search...');
  await userEvent.type(input, 'test');
  const button = canvas.getByRole('button', { name: /search/i });
  await userEvent.click(button);
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


