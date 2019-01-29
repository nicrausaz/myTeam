import axios from 'axios'

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    axios.get(url)
      .then(response => {
        dispatch(itemsIsLoading(false));
        dispatch(itemsFetchDataSuccess(response.data))
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}
