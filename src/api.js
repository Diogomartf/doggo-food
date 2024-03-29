import axios from 'axios';

export const axiosApi = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
  },
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://badi-recipes.now.sh/api/'
});

const api = {
  recipes: {
    list: async ({ ingredients }) =>
      axiosApi.get('/', { params: { i: ingredients } })
  }
};

export default api;
