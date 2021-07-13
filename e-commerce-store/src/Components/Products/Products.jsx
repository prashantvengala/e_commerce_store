import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./style";

const products = [
  {
    id: 1,
    name: "Shoes",
    price: "$50",
    description: "Running shoes",
    image:
      "https://nustafashion.com/wp-content/uploads/2020/05/Mens-casual-white-sneaker-300x300.jpg",
  },
  {
    id: 2,
    name: "Mac Book",
    price: "$4000",
    description: "Apple Mac",
    image:
      "https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw6ca64fdc/content/seasonal-content/homepage/2021/05/endorphinshift-d.jpg",
  },
  {
    id: 3,
    name: "Kettle",
    price: "$20",
    description: "Heating Kettle",
    image:
      "https://cdnprod.mafretailproxy.com/sys-master-root/h72/h1a/13171859587102/679264901394_main_1700Wx1700H",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
