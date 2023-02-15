import React, { useContext, useState, useEffect } from "react";
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

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    if (products) {
      setProductsData(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "men's clothing") {
      const filteredProducts = products.filter(
        (item) => item.category === "men's clothing"
      );
      setProductsData(filteredProducts);
      console.log(filteredProducts);
    }
    if (filterValue === "women's clothing") {
      const filteredProducts = products.filter(
        (item) => item.category === "women's clothing"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "all") {
      setProductsData(products);
    }
  };
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="filter__widget">
            <h3 className="mb-2 font-bold">Filter by Category</h3>
            <select
              className="m-2 p-1 border-solid border-2 border-slate-900 rounded-md	"
              onChange={handleFilter}
            >
              <option value="all">All</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {productsData.length > 0 &&
              productsData?.map((product) => {
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
