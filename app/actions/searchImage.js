import Unsplash from 'unsplash-js/native';
import {
  GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR,
  APP_ACCESS_KEY, APP_SECRET, GET_PROFILE_RESULT_SUCCESS
} from '../constants';

const getSearchResultsData = () => ({
  type: GET_SEARCH_RESULT
});

const getSearchResultsDataValue = (data, query) => ({
  type: GET_SEARCH_RESULT_SUCCESS,
  data,
  query
});

const getProfileResultsDataValue = (data, username) => ({
  type: GET_PROFILE_RESULT_SUCCESS,
  data,
  username
});

const getSearchResultsDataFailure = () => ({
  type: GET_SEARCH_RESULT_ERROR
});

const unsplashObject = () => {
  const unsplashObj = new Unsplash({
    applicationId: `${APP_ACCESS_KEY}`,
    secret: `${APP_SECRET}`,
    headers: {
      'X-Custom-Header': 'foo'
    }
  });
  return unsplashObj;
};

const getImagesFromProfile = (username, page) => {
  const unsplash = unsplashObject();
  return (dispatch) => {
    dispatch(getSearchResultsData());
    unsplash.users.photos(username, page, 15)
      // eslint-disable-next-line no-underscore-dangle
      .then((json) => JSON.parse(json._bodyInit))
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(getProfileResultsDataValue(responseJson, username));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        dispatch(getSearchResultsDataFailure());
      });
  };
};

const getSearchResultsFromAPI = (query, page) => {
  const unsplash = unsplashObject();
  return (dispatch) => {
    dispatch(getSearchResultsData());
    unsplash.search.photos(query, page, 15)
      // eslint-disable-next-line no-underscore-dangle
      .then((json) => JSON.parse(json._bodyInit))
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(getSearchResultsDataValue(responseJson.results, query));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        dispatch(getSearchResultsDataFailure());
      });
  };
};

export {
  getSearchResultsFromAPI,
  getImagesFromProfile
};
