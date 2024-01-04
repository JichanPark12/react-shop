import { useParams } from 'react-router-dom';
import useGetProductByCategory from '../../queries/product/productByCategoryQueries';
import { Product } from '../../interface/product/productInterface';
import CategoryProductCard from './CategoryProductCard';

const CategoryProducts = () => {
  const { id: category } = useParams();

  const { data: products } = useGetProductByCategory(category);
  return (
    <div className="grid gap-6 grid-cols-4">
      {products.map((product: Product, idx: number) => {
        return <CategoryProductCard key={idx} product={product}></CategoryProductCard>;
      })}
    </div>
  );
};

export default CategoryProducts;
