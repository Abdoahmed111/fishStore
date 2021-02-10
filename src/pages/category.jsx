import axios from "axios";
import { useEffect, useState } from "react";

import NavbarContainer from "../containers/navbarContainer";
import ProductsContainer from "../containers/productsContainer";

export default function Category({ location }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [categories, setCategories] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await axios
      .get("/categories")
      .then((result) => setCategories(result.data.data));
  }, []);

  return (
    <>
      <NavbarContainer categories={categories} />
      <ProductsContainer categories={categories} location={location} />
    </>
  );
}
