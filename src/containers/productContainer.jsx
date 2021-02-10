import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product, Loader, Grid } from "../components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function ProductContainer({ location }) {
  const baseUrl = "http://eslamfishstore.com/public/uploads/";
  const [product, setProduct] = useState([]);

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
                  {renderRatingStars(product.rating_avg).map((star) => (
                    <p>{star}</p>
                  ))}
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
              <Product.Button fullWidth>add to cart</Product.Button>
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
