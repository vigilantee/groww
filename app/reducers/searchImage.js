import { GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR } from '../constants';

const initialState = {
    isFetching: false,
    error: false,
    searchResults: [],
    currentPage: 1,
    allSearchResults: []
}

export default searchImageReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCH_RESULT:
            return{
                ...state,
                isFetching: true,
                error: false,
                searchResults: []
            }
        case GET_SEARCH_RESULT_SUCCESS:
            let appendedResults = "";
            appendedResults = state.allSearchResults.concat(action.data.results);
            return{
                ...state,
                isFetching: false,
                error: false,
                allSearchResults: appendedResults,
                searchResults: [],
                currentPage: action.data.nextPage
            }
        case GET_SEARCH_RESULT_ERROR:
            return{
                ...state,
                error: true,
                isFetching: false,
            }
    }
}