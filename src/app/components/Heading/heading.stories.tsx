import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading, HeadingProps } from '.';

const meta = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<HeadingProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Uma coisa qualquer',
  },
  render: (args) => <Heading {...args} />,
};

export const Template: Story = {
  args: {
    children: 'Uma coisa qualquer Typescript',
  },
  render: (args) => <Heading {...args} />,
};
