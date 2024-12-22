import axios from 'axios';

const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';

type FetchAPIProps = (path: string, query?: object) => Promise<any>;

export const buildQueryString = (params: any): string => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join("&");
  return queryString ? `?${queryString}` : "";
};

export const fetchAPI: FetchAPIProps = async (path, query) => {
  try {
    const requestUrl = `${API_URL}${path}${buildQueryString({...query})}`;
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
