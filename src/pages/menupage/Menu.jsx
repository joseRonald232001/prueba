import React, { useEffect, useState } from "react";
import "./menu.css";
import getProductsByCategory from "../../utills/api/products";
import ProductCart from "../../components/menu/ProductCart";

function Menu() {
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState("pastel");

  const menuCategories = [
    { name: "Pasteles", category: "pastel" },
    { name: "Almuerzos", category: "lunch" },
    { name: "Desayunos", category: "breakfast" },
    { name: "Pastas", category: "pastas" },
    { name: "Hamburguesas", category: "hamburguesas" },
    { name: "Pizza", category: "pizza" },
  ];

  // Función para obtener productos por categoría
  const renderProducts = async () => {
    try {
      const res = await getProductsByCategory(categorySelected);
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Cambiar categoría de productos
  const changeCategoryProducts = async (category) => {
    setCategorySelected(category); // Actualiza el estado
    try {
      // Usar directamente la categoría seleccionada para obtener productos
      const res = await getProductsByCategory(category);
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Cargar productos cuando el componente se monta
  useEffect(() => {
    renderProducts();
  }, []); // Dependencia de categorySelected

  console.log(products)

  return (
    <>
      <section className="menu_section">
        <div className="menu_section_title">
          <h2>Nuestro menú</h2>
          <div className="menu_section_line"></div>
        </div>

        <div className="menu_content">
          <ul className="menu_content_filter">
            {menuCategories.map((category) => (
              <li
                key={category.name}
                onClick={() => changeCategoryProducts(category.category)}
              >
                <span
                  className={`${
                    categorySelected == category.category ? "li-active " : ""
                  }`}
                >
                  {category.name}
                </span>
                <div className="item_line"></div>
              </li>
            ))}
          </ul>

          <div className="menu_section_products">
            {products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
