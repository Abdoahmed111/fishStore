import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Grid } from "../components";
import { getCategories } from "../redux/categories/reducers/categoriesReducer";

export default function CategoryContainer() {
  const categories = useSelector(getCategories).categories;
  const baseUrl = "http://eslamfishstore.com/public/uploads/";
  const history = useHistory();

  const handleClickCategory = (id, name) => {
    history.push({
      pathname: "/category",
      categoryName: `${name}`,
      hash: `${name}`,
      search: `?cat_id=${id}`,
    });
  };
  return (
    <Grid>
      <Grid.Item item md={12}>
        <Grid.Title variant="h4" align="center">
          shop by categories
        </Grid.Title>
      </Grid.Item>
      <Grid.Item item container md={12}>
        {categories.map((category) => (
          <Grid.Item
            id={category.id}
            item
            md={3}
            sm={4}
            xs={12}
            onClick={() => handleClickCategory(category.id, category.name)}
          >
            <Grid.Card>
              <Grid.ActionArea>
                <Grid.Image
                  component="img"
                  src={baseUrl + category.image}
                  alt={category.name}
                />
                <Grid.Content>
                  <Grid.Header variant="h6" component="h5">
                    {category.name}
                  </Grid.Header>
                </Grid.Content>
              </Grid.ActionArea>
            </Grid.Card>
          </Grid.Item>
        ))}
      </Grid.Item>
    </Grid>
  );
}
