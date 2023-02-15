import React, { useContext } from "react";
//?Import useParams
import { useParams } from "react-router-dom";
//?Import Cart Context
import { CartContext } from "../contexts/CartContext";
//?Import Product Context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  //?Get the product id from the url
  const { id } = useParams();
  console.log(id);
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //?Get the single product based on the id

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  //?If product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center">Loading...</section>
    );
  }
  //?Destructure product
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/*IMAGE  & txt wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/*IMAGE */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0  ">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/*TEXT*/}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              {price}{" "}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white py-4 px-8"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
