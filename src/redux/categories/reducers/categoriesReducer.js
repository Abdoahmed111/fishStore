import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
} from "../../actionTypes";

const initialState = { pending: false, categories: [], error: null };

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload,
      };

    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// Selectors
export const getCategories = (state) => state.categories;
export const getCategoriesPending = (state) => state.pending;
export const getCategoriesError = (state) => state.error;

export default categoriesReducer;
