// ProductList.js
import React from "react";
import { useParams } from "react-router-dom";
import './style.css'

const ProductList = ({ products }) => {
  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id === parseInt(id, 10));

  if (!selectedProduct) {
    console.log(`No product found with id ${id}`);
    return <div>No Product</div>;
  }

  console.log("Selected Product:", selectedProduct);

  return (
    <div className="ProductInfo_Box">
      <div className="Product_Info" id={selectedProduct.id}>
        <div>
          <img src={selectedProduct.img}></img>
        </div>
        <div>
          <div><h3>{selectedProduct.name}</h3></div>
          <div><span>Price: {selectedProduct.price}</span></div>
          <div><p>{selectedProduct.description}</p></div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
