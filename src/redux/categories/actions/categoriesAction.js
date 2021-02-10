import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
} from "../../actionTypes";

export function fetchCategoriesPending() {
  return {
    type: FETCH_CATEGORIES_PENDING,
  };
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function fetchCategoriesError(error) {
  return {
    type: FETCH_CATEGORIES_ERROR,
    payload: error,
  };
}
