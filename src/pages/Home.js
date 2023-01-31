import React, { useContext } from "react";
//?Import Products Context
import { ProductContext } from "../contexts/ProductContext";
//?Import Components
import Product from "../components/Product";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import ParallaxContent from "../components/ParallaxContent";
import Contact from "../components/Contact";
import BackToTopBtn from "../components/BackToTopBtn";

const Home = () => {
  //?Get productos from productosContext
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {filteredProducts.map((product) => {
              //TODO KEY = special string attribute, are use to identify which items in list are changedwe can say that keys are used to give an identity to the elements in the lists
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <Aboutus />
      <ParallaxContent />
      <Contact />
      <BackToTopBtn />
    </div>
  );
};

export default Home;
