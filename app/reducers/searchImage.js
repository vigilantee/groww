import {
  GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR,
  EMPTY_STORE, GET_PROFILE_RESULT_SUCCESS
} from '../constants';

const initialState = {
  isFetching: false,
  error: false,
  searchResults: [],
  currentPage: 1,
  allSearchResults: [],
  query: 'coffee',
  profileSearchResult: [],
  username: ''
};

const searchImageReducer = (state = initialState, action) => {
  let appendedResults = state.allSearchResults;
  let appendedProfileSearchResult = state.allSearchResults;
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        isFetching: true,
        error: false,
        searchResults: []
      };
    case GET_SEARCH_RESULT_SUCCESS:
      if (state.allSearchResults.length > 0 && action.query === state.query) {
        Array.prototype.push.apply(appendedResults, action.data);
      } else {
        appendedResults = action.data;
      }
      return {
        ...state,
        isFetching: false,
        error: false,
        allSearchResults: appendedResults,
        searchResults: [],
        currentPage: action.data.nextPage,
        query: action.query
      };
    case GET_PROFILE_RESULT_SUCCESS:
      if (state.profileSearchResult.length > 0 && action.username === state.username) {
        Array.prototype.push.apply(appendedProfileSearchResult, action.data);
      } else {
        appendedProfileSearchResult = action.data;
      }
      return {
        ...state,
        isFetching: false,
        error: false,
        profileSearchResult: appendedProfileSearchResult,
        allSearchResults: appendedProfileSearchResult,
        searchResults: [],
        currentPage: action.data.nextPage,
        username: action.username
      };
    case GET_SEARCH_RESULT_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    case EMPTY_STORE:
      return initialState;
    default:
      return state;
  }
};

export default searchImageReducer;
