import { IItemDescription } from '../../models/item.model';
import { api } from './api';

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWordDescription: builder.query<IItemDescription, string>({
      query: (id) => `/catalog?id=${id}`,
      providesTags: () => [
        {
          type: 'words',
        },
      ],
    }),
  }),
});

export const { useGetWordDescriptionQuery } = recipeApi;
