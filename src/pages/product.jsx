import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NavbarContainer from "../containers/navbarContainer";
import ProductContainer from "../containers/productContainer";

export default function Product({ location }) {
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
      <ProductContainer location={location} />
    </>
  );
}
