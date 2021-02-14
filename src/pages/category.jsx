import NavbarContainer from "../containers/navbarContainer";
import ProductsContainer from "../containers/productsContainer";

export default function Category({ location }) {
  return (
    <>
      <NavbarContainer />
      <ProductsContainer location={location} />
    </>
  );
}
