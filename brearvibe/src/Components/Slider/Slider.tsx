import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { IProduct } from '../../Helper/Interface/Interface';
import './Slider.scss';
import { Link } from 'react-router-dom';
import { getAllproducts } from '../../Helper/Api/ApiProducts';
import { Helmet } from 'react-helmet';

function Slider() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const data = await getAllproducts();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const sliderProducts = allProducts.slice(0, 3);

  return (
    <div className="slider">
      <Helmet>
        <title>BearVibe Café</title>
        <meta
          name="description"
          content="BearVibe Café, Italian coffee, co-working, remote work, menu, services, atmosphere, quality coffee"
        />
      </Helmet>
      <div className="slider_title">
        <h2>Indulge in Culinary Delights</h2>
        <p>
          Explore a Symphony of Flavors in Our Unparalleled Dessert Collection, Crafted to Elevate Your Gastronomic
          Experience.
        </p>
      </div>
      <div className="slider_products">
        {sliderProducts.map((data: IProduct) => (
          <Product key={data.id} product={data} />
        ))}
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
