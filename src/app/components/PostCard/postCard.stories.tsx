import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PostCard, PostCardProps } from '.';

const meta = {
  title: 'PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<PostCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slug: 'meu-post-de-teste',
    title: 'Título de Exemplo para o Storybook',
    cover: 'https://placehold.co/600x400/png',
    width: 600,
  },
  render: (args) => <PostCard {...args} />,
};

export const TypeScript: Story = {
  args: {
    slug: 'meu-post-de-teste',
    title: 'Título de Exemplo para o Storybook Typescript',
    cover:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*N6ugtpXET1pOLysSk_DWaQ.png',
    width: 600,
  },
  render: (args) => <PostCard {...args} />,
};
