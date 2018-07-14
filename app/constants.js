const BASE_URL = 'https://api.shutterstock.com/v2'
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT'
export const GET_SEARCH_RESULT_SUCCESS = 'GET_SEARCH_RESULT_SUCCESS'
export const GET_SEARCH_RESULT_ERROR = 'GET_SEARCH_RESULT_ERROR'
export const IMAGE_URL_PREFIX = `${BASE_URL}/images/search?query=`
export const IMAGE_URL_SUFFIX = '&safe=true&image_type=photo&orientation=horizontal&page=1&per_page=12'
