import { useState } from 'react';
import useGetProductAll from '../../queries/product/productAll';
import { Product } from '../../interface/product/productInterface';
import { Link } from 'react-router-dom';
interface Props {
  filterProducts: Product[];
}
const SearchModal = ({ filterProducts }: Props) => {
  if (filterProducts.length === 0) {
    return;
  }

  return (
    <div className=" absolute dark:bg-gray-600 max-h-[500px] overflow-scroll rounded-lg">
      <ul>
        {filterProducts.map((product) => (
          <div className="p-3 hover:bg-gray-800 transition ease-in-out duration-200">
            <Link to={`/${product.id}`}>{product.title}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Search = () => {
  const [value, setValue] = useState('');
  const { data: Products } = useGetProductAll();

  const filterProducts = Products.filter((product: Product) => {
    return product.title.toLowerCase().includes(value.toLowerCase()) && value !== '';
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색"
        className="input input-bordered max-w-xs dark:bg-slate-500 ml-5 relative"
        value={value}
        onChange={handleChange}
      />
      <SearchModal filterProducts={filterProducts}></SearchModal>
    </div>
  );
};

export default Search;
