import { PostData } from '@/app/domain/posts/post';
import { fetchAPI } from './fetch-helper';

export const getPostsByCategory = async (
  categoryName: string,
): Promise<PostData[]> => {
  const urlParams = {
    filters: {
      category: {
        name: {
          $eq: categoryName, // Filtra onde category.name é igual ao parâmetro
        },
      },
    },
    sort: ['createdAt:desc'],
    populate: {
      cover: { fields: ['url', 'alternativeText', 'width', 'height'] },
      category: { populate: true },
      author: true,
    },
  };

  const json = await fetchAPI('/posts', urlParams);
  return json.data || [];
};
