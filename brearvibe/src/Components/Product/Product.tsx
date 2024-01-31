import { IProduct } from '../../Helper/Interface/Interface';
import './Product.scss';

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  console.log('data from Product: ', product);

  const {
    attributes: { name, price, description, image },
  } = product;
  const imageUrl = image && image.data && image.data[0].attributes && image.data[0].attributes.url;
  return (
    <div className="product">
      <div className="product_image">{imageUrl && <img src={imageUrl} alt={name} />}</div>
      <div className="product_information">
        <div className="product_title">
          <h4>{name}</h4>
          <p>&#36;{price}</p>
        </div>
        <div className="product_description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
