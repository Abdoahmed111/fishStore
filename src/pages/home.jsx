import { useEffect } from "react";
import { Loader, MainSlider } from "../components";
import CategoryContainer from "../containers/categoryContainer";
import NavbarContainer from "../containers/navbarContainer";
import { useDispatch, useSelector } from "react-redux";
import fetchCategories from "../redux/categories/actions/fetchCategoriesAction";
import {
  getCategoriesError,
  getCategoriesPending,
} from "../redux/categories/reducers/categoriesReducer";

const Home = () => {
  const error = useSelector(getCategoriesError);
  const pending = useSelector(getCategoriesPending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      {pending ? (
        <Loader />
      ) : (
        <div>
          {error && <span>{error}</span>}
          <NavbarContainer />
          <MainSlider />
          <CategoryContainer />
        </div>
      )}
    </>
  );
};

export default Home;
