import { get } from 'lodash';

//Los get, necesitan un estado y un string,
//lo podemos encontrar en el search de la carpeta reducers
//vemos que está el state, el isLoading, el movieResults y el movieResult
export const isSearchLoading = (state) => get(state, 'search.isLoading');
export const movieResults = (state) => get(state, 'search.movieResults.Search');
export const movieResult = (state) => get(state, 'search.movieResult');
