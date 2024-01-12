import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <h1 className="text-lg font-bold">
      <Link to={'/'}>React Shop</Link>
    </h1>
  );
};

export default Title;
