import { PostData } from '@/app/domain/posts/post';
import { fetchAPI } from './fetch-helper';
import { PAGE_SIZE } from '@/app/config/app-config';

export const getAllPosts = async (): Promise<PostData[]> => {
  const urlParams = {
    sort: ['createdAt:desc'],
    populate: {
      cover: {
        fields: ['url', 'alternativeText', 'width', 'height'],
      },
      category: {
        populate: true,
      },
      author: true,
    },
    pagination: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
  };

  const json = await fetchAPI('/posts', urlParams);

  // Chama a função passando o endpoint '/posts' e o objeto params
  return json.data || [];
};
