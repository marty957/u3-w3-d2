import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../action";

const initialState = {
  companies: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        companies: {
          ...state.companies,
          content: [...state.companies.content, action.payload]
        }
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        companies: {
          ...state.companies,
          content: state.companies.content.filter((company) => company !== action.payload)
        }
      };
    default:
      return state;
  }
};
export default mainReducer;
