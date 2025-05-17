//
import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";

const category = "tents";
const listElement = document.querySelector("#product-list"); // <ul id="product-list">
const dataSource = new ProductData(category);

const productList = new ProductList(category, dataSource, listElement);
productList.init(); // this triggers the rendering

// Create instance of ProductData
//const dataSource = new ProductData('tents');

// Example usage of getData() and findProductById
dataSource.getData().then((products) => {
  console.log("All products:", products);
});

dataSource.findProductById("12345").then((product) => {
  if (product) {
    console.log("Found product:", product);
  } else {
    console.log("Product not found");
  }
});
