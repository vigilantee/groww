import { GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR, IMAGE_URL_PREFIX, IMAGE_URL_SUFFIX } from '../constants';

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


export default getSearchResultsFromAPI = (query) => {
    apiUrl = `${IMAGE_URL_PREFIX}${query}${IMAGE_URL_SUFFIX}`
    user_token = 'Basic MzM1MmFlZmZiZDI0ZDMzZjg4NTk6MDk3ZjgzMjI0MmFkMzcxZDlmMDEyNzcwY2FiZGIxZTZjZWJjNDMzYQ=='
  return(dispatch) => {
    dispatch(getSearchResultsData())
    fetch(apiUrl, { 
      method: 'get', 
      headers: {
          'Authorization': user_token
        }, 
      }).then((response) =>{ if(response.status==200){return response.json()}else return []})
      .then((responseJson) => {
        console.log('response is ....',responseJson)
        dispatch(getSearchResultsDataValue(responseJson))
      })
      .catch((error) => {
        dispatch(getSearchResultsDataFailure())
      });
  }
}