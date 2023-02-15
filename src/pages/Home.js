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

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products.map((product) => {
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
