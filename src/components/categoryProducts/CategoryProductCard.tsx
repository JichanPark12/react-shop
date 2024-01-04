import { Link } from 'react-router-dom';
import { Product } from '../../interface/product/productInterface';

interface PropData {
  product: Product;
}

const CategoryProductCard = ({ product }: PropData) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="card card-bordered bg-base-100 shadow-xl card-normal dark:border-darkBlueColor"
    >
      <figure className="h-80">
        <img className=" w-2/5 h-1/2" src={product.image} />
      </figure>
      <div className="card-body dark:bg-gray-700">
        <h2 className="card-title text-base">{product.title}</h2>
        <p className="text-base ">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default CategoryProductCard;
