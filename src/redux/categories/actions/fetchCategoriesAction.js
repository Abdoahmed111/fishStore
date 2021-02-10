import axios from "axios";
import {
  fetchCategoriesError,
  fetchCategoriesPending,
  fetchCategoriesSuccess,
} from "./categoriesAction";

function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesPending());
    axios
      .get("/categories")
      .then((res) => {
        const result = res.data.data;
        dispatch(fetchCategoriesSuccess(result));
        return result;
      })
      .catch((error) => {
        dispatch(fetchCategoriesError(error));
      });
  };
}

export default fetchCategories;
