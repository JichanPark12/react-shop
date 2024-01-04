import { Link } from 'react-router-dom';
import { useGetCategories } from '../../queries/category/categoryQueries';
import { useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import DarkConfigIcon from './DarkConfigIcon';
import CategoryLinks from './CategoryLink';
const Nav = () => {
  const { data: shopCategories } = useGetCategories<Array<string>>();
  const [isDark, setIsDark] = useState<boolean>(
    JSON.parse(localStorage.getItem('isDark') || 'false')
  );

  document.documentElement.classList.toggle('dark', isDark);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div className="dark:bg-obsidian dark:text-white flex justify-center w-full ">
      <div className="navbar max-w-screen-xl2 pl-5 pr-5">
        <h1 className="text-lg font-bold">
          <Link to={'/'}>React Shop</Link>
        </h1>
        <CategoryLinks shopCategories={shopCategories}></CategoryLinks>
        <div className="flex ml-auto">
          <DarkConfigIcon setIsDark={setIsDark} isDark={isDark}></DarkConfigIcon>
          <input
            type="text"
            placeholder="검색"
            className="input input-bordered w-full max-w-xs dark:bg-slate-500 ml-5"
          />
          <CartIcon></CartIcon>
        </div>
      </div>
    </div>
  );
};

export default Nav;
