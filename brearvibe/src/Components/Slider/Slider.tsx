import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { IProduct } from "../../Helper/Interface/Interface";
import './Slider.scss';
import { Link } from "react-router-dom";
import { getAllproducts } from "../../Helper/Api/ApiProducts";

function Slider() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllproducts();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const sliderProducts = allProducts.slice(0, 3)

  return (

    <div className="slider">
      <div className="slider_title">
        <h2>Indulge in Culinary Delights</h2>
        <p>Explore a Symphony of Flavors in Our Unparalleled Dessert Collection, Crafted to Elevate Your Gastronomic Experience.</p>
      </div>
      <div className="slider_products">
        {sliderProducts.map((data: IProduct) =>
          <Product key={data.id} product={data} />
        )}
      </div>
      <div className="slider_button">
        <Link to={'menu'} className="button">
          Go to menu
        </Link>
      </div>
    </div>

  );


}

export default Slider;
