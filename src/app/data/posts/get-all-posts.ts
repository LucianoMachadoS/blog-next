import { PostData } from '@/app/domain/posts/post';
import { fetchAPI } from './fetch-helper';
import { PAGE_SIZE } from '@/app/config/app-config';
import { StrapiResponse } from '@/app/domain/shared/strapi-response';

export const getAllPosts = async (
  page = 1,
): Promise<StrapiResponse<PostData>> => {
  const urlParams = {
    sort: ['createdAt:desc'],
    populate: {
      cover: {
        fields: ['url', 'alternativeText', 'width', 'height'],
      },
      category: { populate: true },
      author: true,
    },
    pagination: {
      page: page,
      pageSize: PAGE_SIZE,
    },
  };

  const json = await fetchAPI('/posts', urlParams);

  if (!json || !json.meta) {
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageCount: 0,
          pageSize: 10,
          total: 0,
        },
      },
    };
  }

  return json;
};
