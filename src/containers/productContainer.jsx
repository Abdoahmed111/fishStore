import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product, Loader, Grid } from "../components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router";

export default function ProductContainer({ location }) {
  const baseUrl = "http://eslamfishstore.com/public/uploads/";
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const user = JSON.parse(window.localStorage.getItem("user"));
  const history = useHistory();

  const renderRatingStars = (rating) => {
    let ratings = [];
    for (let i = 0; i < rating; i++) {
      ratings.push("⭐");
    }
    return ratings;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axios
      .get(`/product${location.search}`)
      .then((res) => setProduct(res.data.data));
  }, []);

  const addToCart = () => {
    const product_id = Number(location.search.split("=")[1]);
    // check if user is authorized
    if (user) {
      axios
        .post(
          "/addcart",
          {
            product_id: product_id,
            quantity: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((res) => {
          setOpen(true);
          setMessage(res.data.massage);
        })
        .catch((error) => console.log(error));
    } else {
      history.push({
        pathname: "/signin",
      });
    }
  };

  return (
    <>
      {!product.productimages ? (
        <Loader />
      ) : (
        <Product spacing={2}>
          <Product.Row item md={8} sm={12}>
            <Product.ImageContainer>
              <AwesomeSlider bullets={false}>
                {product.productimages &&
                  product.productimages.map((img) => (
                    <div data-src={baseUrl + img.image} />
                  ))}
              </AwesomeSlider>
            </Product.ImageContainer>
          </Product.Row>
          <Product.Row item md={4} sm={12}>
            <Product.Details elevation={3}>
              <Product.Name variant="h5" component="h6" mb="2">
                {product.productname}
              </Product.Name>
              <Product.Row container>
                <Product.Row item xs={8}>
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
                </Product.Row>
                <Product.Row item xs={4}>
                  <div style={{ display: "flex" }}>
                    {renderRatingStars(product.rating_avg).map((star) => (
                      <p>{star}</p>
                    ))}
                  </div>
                </Product.Row>
              </Product.Row>
              <Product.Row container>
                <Product.Row item xs={12}>
                  <Product.Header variant="h6" component="h6">
                    Basic info:
                  </Product.Header>
                  {product.attribute.map((attribute) => (
                    <Product.Flex>
                      <Product.Header variant="h6" component="h6">
                        {attribute.name} :
                      </Product.Header>
                      <Product.Text variant="body2" component="p">
                        {attribute.value}
                      </Product.Text>
                    </Product.Flex>
                  ))}
                </Product.Row>
              </Product.Row>
              <Product.Button onClick={() => addToCart()} fullWidth>
                add to cart
              </Product.Button>
              {open && (
                <Snackbar
                  style={{ width: "100%" }}
                  open={open}
                  autoHideDuration={4000}
                  onClose={() => setOpen(false)}
                >
                  <Alert onClose={() => setOpen(false)} severity="success">
                    {message}
                  </Alert>
                </Snackbar>
              )}
              <Product.Header variant="h5" component="h6">
                Description:
              </Product.Header>
              <Product.Text variant="body2" component="p">
                {product.descreption}
              </Product.Text>
            </Product.Details>
          </Product.Row>
        </Product>
      )}
    </>
  );
}
