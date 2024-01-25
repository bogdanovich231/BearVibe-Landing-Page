import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { IProduct } from "../../Helper/Interface/Interface";
import './Slider.scss';
import { Link } from "react-router-dom";

function Slider() {
  const [alldata, setalldata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((response) => response.json())
      .then(({ data }) => setalldata(data));
  }, []);

  const sliderProducts = alldata.slice(0, 3)

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
