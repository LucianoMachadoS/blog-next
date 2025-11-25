import { StrapiResponse } from '@/app/domain/shared/strapi-response';
import { fetchAPI } from './fetch-helper';
import { PAGE_SIZE } from '@/app/config/app-config';
import { PostData } from '@/app/domain/posts/post';

export const getPostsByCategory = async (
  categoryName: string,
  page = 1,
): Promise<StrapiResponse<PostData>> => {
  const urlParams = {
    filters: {
      category: {
        name: {
          $eq: categoryName,
        },
      },
    },
    sort: ['createdAt:desc'],
    populate: {
      cover: { fields: ['url', 'alternativeText', 'width', 'height'] },
      category: { populate: true },
      author: true,
    },
    pagination: {
      page: page,
      pageSize: PAGE_SIZE,
    },
  };

  const json = await fetchAPI('/posts', urlParams);
  return (
    json || {
      data: [],
      meta: {
        pagination: { page: 1, pageCount: 0, pageSize: PAGE_SIZE, total: 0 },
      },
    }
  );
};
