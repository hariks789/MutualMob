// import Api from '../../Lib/Api/Api';

const SAVE_USER_INFO = 'SAVE_USER_INFO';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        user: action.user,
      };

    default:
    return state;
  }
};

export function getUserInfo(callback) {
  return (dispatch, getState) => {
      // Api.get('/user_info', token).then(resp => {
      //   if (resp.name) {
      //     dispatch({ type: SAVE_USER_INFO, user: resp });
      //   }
      //   callback(resp);
      // });
  };
}

export default userReducer;
