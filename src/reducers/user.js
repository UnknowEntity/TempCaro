const user = (
  state = {
    data: null,
    token: null
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.data
      };
    case 'UPDATE_TOKEN':
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default user;
