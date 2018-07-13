import { GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR } from '../constants';

getSearchResultsData = () => {
  return{
    type: GET_SEARCH_RESULT
  }
}

getSearchResultsDataValue = (data) => {
  return{
    type: GET_SEARCH_RESULT_SUCCESS,
    data: data
  }
}

getSearchResultsDataFailure = () => {
  return{
    type: GET_SEARCH_RESULT_ERROR
  }
}


export default getSearchResultsFromAPI = (user_token,apiUrl) => {
  return(dispatch) => {
    dispatch(getSearchResultsData())
    fetch(apiUrl, { 
      method: 'get', 
      headers: {
          'Authorization': user_token, 
          'Cache-Control': 'no-cache'
        }, 
      }).then((response) =>{ if(response.status==200){return response.json()}else return []})
      .then((responseJson) => {
        dispatch(getSearchResultsDataValue(responseJson))
      })
      .catch((error) => {
        dispatch(getSearchResultsDataFailure())
      });
  }
}