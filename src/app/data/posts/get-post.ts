import { PostData } from '@/app/domain/posts/post';
import { fetchAPI } from './fetch-helper';
import markdownToHtml from '@/app/utils/markdown-to-html';

export const getPostBySlug = async (slug: string): Promise<PostData | null> => {
  const urlParams = {
    filters: { slug: { $eq: slug } },
    populate: {
      cover: { fields: ['url', 'alternativeText', 'width', 'height'] },
      category: { populate: true },
      author: true,
    },
  };

  const json = await fetchAPI('/posts', urlParams);
  const posts = json.data;

  if (!posts || posts.length === 0) {
    return null;
  }

  const post = posts[0];

  // Convertemos o markdown para HTML antes de retornar o objeto
  const contentHtml = await markdownToHtml(post.content);

  // Retornamos o post, mas substituímos o conteúdo original pelo HTML
  return {
    ...post,
    content: contentHtml,
  };
};
