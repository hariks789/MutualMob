// import Api from '../../Lib/Api/Api';

const SAVE_POST_INFO = 'SAVE_POST_INFO';

const initialState = {
  posts: {},
};

const postReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POST_INFO:
      return {
          ...state,
          posts: action.posts,
      };

    default:
    return state;
  }
};

export function getPostDetails(callback) {
  return (dispatch, getState) => {
      // Api.get('/user_info', token).then(resp => {
      //   if (resp.name) {
      //     dispatch({ type: SAVE_USER_INFO, user: resp });
      //   }
      //   callback(resp);
      // });
  };
}

export default postReducer;
