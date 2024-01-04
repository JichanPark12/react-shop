import { Link } from 'react-router-dom';

interface Props {
  shopCategories: Array<string>;
}

const CategoryLinks = ({ shopCategories }: Props) => {
  return (
    <ul>
      {shopCategories.map((category: string, idx: number) => (
        <li key={idx}>
          <Link to={`/category/${category}`} className="btn btn-ghost btn-sm">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryLinks;
