import useGetProductByCategory from '../../queries/product/productByCategoryQueries';
import { Product } from '../../interface/product/productInterface';
import CategoryProductCard from './CategoryProductCard';

interface Props {
  category: string;
  limit?: number;
}

const CategoryProducts = ({ category, limit = Infinity }: Props) => {
  const { data: products } = useGetProductByCategory(category);

  const limitProducts =
    limit !== Infinity
      ? products.filter((_: Product, idx: number) => idx < limit)
      : products;

  return (
    <div className="grid gap-6 grid-cols-4">
      {limitProducts.map((product: Product, idx: number) => {
        return <CategoryProductCard key={idx} product={product}></CategoryProductCard>;
      })}
    </div>
  );
};

export default CategoryProducts;
