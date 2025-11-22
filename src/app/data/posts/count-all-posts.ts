import { fetchAPI } from './fetch-helper';

export const countAllPosts = async (): Promise<number> => {
  const urlParams = {
    pagination: {
      pageSize: 1,
    },
    fields: ['id'],
  };

  try {
    const json = await fetchAPI('/posts', urlParams);
    return json.meta.pagination.total;
  } catch (e) {
    return 0;
  }
};
