import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import MenuCategories from "../components/menu/MenuCategories";
import TopRatedProducts from "../components/TopRatedProducts/TopRatedProducts";
import Contact from "../components/Contact/Contact";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";
import Seo from "../seo/Seo";

function Home() {
  return (
    <>
      <Seo title="Candy | Cake" url="https://tusitio.com/menu" />
      <main>
        <Hero />
        <About />
        <MenuCategories />
        <TopRatedProducts />
        <Contact />
        <Location />
        <Footer />
      </main>
    </>
  );
}

export default Home;
