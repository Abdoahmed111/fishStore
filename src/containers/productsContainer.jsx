import { Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Grid, Loader } from "../components";
import { getCategories } from "../redux/categories/reducers/categoriesReducer";

export default function ProductsContainer({ products, location }) {
  const baseUrl = "http://eslamfishstore.com/public/uploads/";
  const [loader, setLoader] = useState(Boolean);
  const [category, setCategory] = useState([]);
  const categories = useSelector(getCategories);

  const renderRatingStars = (rating) => {
    let ratings = [];
    for (let i = 0; i < rating; i++) {
      ratings.push("⭐");
    }
    return ratings;
  };

  const history = useHistory();

  const handleClickCategory = (id, name) => {
    history.push({
      pathname: "/category",
      categoryName: `${name}`,
      hash: `${name}`,
      search: `?cat_id=${id}`,
    });
  };

  const handleClickProduct = (id, name) => {
    history.push({
      pathname: "/product",
      productName: `${name}`,
      hash: `${name}`,
      search: `?product_id=${id}`,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setLoader(true);
    await axios
      .get(`/category${location.search}`)
      .then((res) => setCategory(res.data.data));
    setLoader(false);
  }, [location.search]);

  return (
    <>
      <Grid style={{ marginTop: "5px" }}>
        {/* Categories Menu Buttons */}
        <Grid.Item item md={3} sm={12}>
          <Grid.Card productpage="true">
            <h3>Categories</h3>
            <Divider />
            {categories.map((category) => (
              <Grid.Button
                color="primary"
                key={category.id}
                onClick={() => handleClickCategory(category.id, category.name)}
              >
                {category.name}
              </Grid.Button>
            ))}
          </Grid.Card>
        </Grid.Item>
        {/* Products */}
        <Grid.Item item container md={9} sm={12}>
          <Grid.Item item xs={12}>
            <Grid.Title variant="h4" align="center" component="h4">
              {location.categoryName}
            </Grid.Title>
          </Grid.Item>
          {loader ? (
            <Loader />
          ) : (
            <Grid.Item item container xs={12}>
              {category.map((product) => (
                <Grid.Item id={product.product_id} item md={4} sm={6} xs={12}>
                  <Grid.Card
                    onClick={() =>
                      handleClickProduct(
                        product.product_id,
                        product.productname
                      )
                    }
                  >
                    <Grid.ActionArea>
                      <Grid.Image
                        src={baseUrl + product.productimage}
                        component="img"
                        alt={product.productname}
                      />
                      <Grid.Content>
                        <div>
                          <Grid.Header variant="h6" component="h6">
                            {product.productname}
                          </Grid.Header>
                          {product.offer_price !== "0" ? (
                            <Grid.Price>
                              <Grid.OfferPrice
                                variant="body2"
                                color="textPrimary"
                                component="p"
                              >
                                ${product.offer_price}
                              </Grid.OfferPrice>
                              <Grid.OriginalPrice
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                ${product.price}
                              </Grid.OriginalPrice>
                            </Grid.Price>
                          ) : (
                            <Grid.Price>
                              <Grid.OfferPrice
                                variant="body2"
                                color="textPrimary"
                                component="p"
                              >
                                ${product.price}
                              </Grid.OfferPrice>
                            </Grid.Price>
                          )}
                          <Grid.Rating>
                            {renderRatingStars(product.rating_avg).map(
                              (star) => (
                                <p>{star}</p>
                              )
                            )}
                          </Grid.Rating>
                        </div>
                        <div>
                          <Grid.IconButton>
                            <FavoriteIcon />
                          </Grid.IconButton>
                        </div>
                      </Grid.Content>
                    </Grid.ActionArea>
                  </Grid.Card>
                </Grid.Item>
              ))}
            </Grid.Item>
          )}
        </Grid.Item>
      </Grid>
    </>
  );
}
