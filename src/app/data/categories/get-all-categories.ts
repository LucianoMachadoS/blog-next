import { fetchAPI } from '../posts/fetch-helper';

export type CategoryData = {
  id: number;
  documentId: string;
  name: string;
  slug: string; // Se tiver slug no strapi, use slug. Se não, use name.
};

export const getAllCategories = async (): Promise<CategoryData[]> => {
  const urlParams = {
    fields: ['name', 'slug'],
    pagination: {
      pageSize: 100,
    },
  };

  const json = await fetchAPI('/categories', urlParams);

  return json.data || [];
};
