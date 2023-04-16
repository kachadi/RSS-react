import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IItem } from '../../models/item.model';

const API_URL = 'https://mock-server-api-seven.vercel.app';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['words'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getSearchItems: builder.query<IItem[], string>({
      query: (searchValue) => `/catalog?enTitle_like=${searchValue}`,
      providesTags: () => [
        {
          type: 'words',
        },
      ],
      transformResponse: (response: IItem[]) =>
        response.map((item) => {
          const newImagePath = `https://mock-server-api-seven.vercel.app/${item.imagePath}`;
          return {
            ...item,
            imagePath: newImagePath,
          };
        }),
    }),
  }),
});

export const { useGetSearchItemsQuery } = api;
