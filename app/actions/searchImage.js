import { GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR, IMAGE_URL_PREFIX, IMAGE_URL_SUFFIX, AUTH_TOKEN } from '../constants';
import Unsplash from 'unsplash-js/native';

getSearchResultsData = () => {
  return {
    type: GET_SEARCH_RESULT
  }
}

getSearchResultsDataValue = (data, query) => {
  console.log("invoked......");
  return {
    type: GET_SEARCH_RESULT_SUCCESS,
    data: data,
    query: query
  }
}

getSearchResultsDataFailure = () => {
  return {
    type: GET_SEARCH_RESULT_ERROR
  }
}


export default getSearchResultsFromAPI = (query, page) => {
  const APP_ACCESS_KEY = '720177452e222f086fc0921d4c9304b554d4c1462615f1ddd5402cce555db57d';
  const APP_SECRET = 'edabf0c9cd2ea291c3143717e204576ecc58f7ecdddb87664ae57a44665c3532';
  const unsplash = new Unsplash({
    applicationId: `${APP_ACCESS_KEY}`,
    secret: `${APP_SECRET}`,
    headers: {
      "X-Custom-Header": "foo"
    }
  });


  return (dispatch) => {
    dispatch(getSearchResultsData())
    unsplash.search.photos(query, 1)
      .then(json => JSON.parse(json._bodyInit))
      .then(json => {
        // Your code
        console.log("aaya.......sdfsdfsdf", json);
        return json;
      })
      .then(responseJson => {
        dispatch(getSearchResultsDataValue(responseJson.results, query))
      })
      .catch((error) => {
        dispatch(getSearchResultsDataFailure())
      });
  }
}