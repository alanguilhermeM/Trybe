export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (character) => ({
  type: REQUEST_API_SUCCESS,
  character,
})

export const requestApiFailure = () => ({
  type: REQUEST_API_FAILURE,
})

export function minhaAcaoAssincrona(namee) {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${namee}`);
      const data = await response.json();
      dispatch(requestApiSuccess(data))
    } catch (error) {
      dispatch(requestApiFailure(error))
    }
  };
};