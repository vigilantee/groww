import Unsplash from 'unsplash-js/native';
import { GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR, APP_ACCESS_KEY, APP_SECRET } from '../constants';

const getSearchResultsData = () => ({
  type: GET_SEARCH_RESULT
});

const getSearchResultsDataValue = (data, query) => ({
  type: GET_SEARCH_RESULT_SUCCESS,
  data,
  query
});

const getSearchResultsDataFailure = () => ({
  type: GET_SEARCH_RESULT_ERROR
});


const getSearchResultsFromAPI = (query, page) => {
  const unsplash = new Unsplash({
    applicationId: `${APP_ACCESS_KEY}`,
    secret: `${APP_SECRET}`,
    headers: {
      'X-Custom-Header': 'foo'
    }
  });


  return (dispatch) => {
    dispatch(getSearchResultsData());
    unsplash.search.photos(query, page)
      // eslint-disable-next-line no-underscore-dangle
      .then((json) => JSON.parse(json._bodyInit))
      .then((responseJson) => {
        dispatch(getSearchResultsDataValue(responseJson.results, query));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        dispatch(getSearchResultsDataFailure());
      });
  };
};

export default getSearchResultsFromAPI;
