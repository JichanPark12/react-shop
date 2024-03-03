import { useGetCategories } from '../../queries/category/categoryQueries';
import CartIcon from './CartIcon';
import DarkConfigIcon from './DarkConfigIcon';
import CategoryLinks from './CategoryLink';
import Title from './Title';
import Search from './Search';
const Nav = () => {
  const { isError, data: shopCategories = [] } = useGetCategories<Array<string>>();
  if (isError) {
    alert('카테고리를 불러오는 중 에러가 발생했습니다.');
  }
  return (
    <div className="dark:bg-obsidian z-10 dark:text-white fixed w-full  justify-center max-w-sc ">
      <div className="max-w-screen-xl2 mx-auto flex navbar">
        <Title></Title>
        <CategoryLinks shopCategories={shopCategories}></CategoryLinks>
        <div className="flex ml-auto">
          <DarkConfigIcon></DarkConfigIcon>
          <Search></Search>
          <CartIcon></CartIcon>
        </div>
      </div>
    </div>
  );
};

export default Nav;
