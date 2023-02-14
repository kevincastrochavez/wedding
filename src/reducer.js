export const initialState = {
  language: 'en',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TO_SPANISH':
      return {
        ...state,
        language: action.language,
      };
    case 'CHANGE_TO_ENGLISH':
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default reducer;
