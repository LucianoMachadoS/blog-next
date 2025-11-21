import { API_URL } from '@/app/config/app-config';
import qs from 'qs';

export function getStrapiURL(path = '') {
  return `${API_URL}${path}`;
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
) {
  try {
    // 1. Transforma o objeto JSON na string de query do Strapi
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // Deixa a URL mais limpa
    });

    // 2. Monta a URL completa: /api/posts?populate=*&...
    const requestUrl = getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ''}`,
    );

    // 3. Faz o fetch nativo
    const response = await fetch(requestUrl, {
      ...options,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if Strapi is running.`);
  }
}
