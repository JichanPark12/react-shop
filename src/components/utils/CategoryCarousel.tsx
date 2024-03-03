import { Carousel } from 'react-responsive-carousel';
import { carouselCategory } from '../../constants/categories';
import { Link } from 'react-router-dom';

const CategoryCarousel = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
      {carouselCategory.map((category) => {
        return (
          <div key={category.imgUrl} className="flex h-[720px] w-full relative">
            <img src={category.imgUrl} className="h-full" />
            <div className="absolute max-w-screen-xl2 m-auto text-white bottom-1/3 mb-10 text-left lg:container px-4 md:px-10">
              <h2 className="text-2xl font-bold">{category.content.title}</h2>
              <p className="">{category.content.info}</p>
              <Link to={`/category/${category.url}`}>
                <div className="btn btn-primary">바로가기</div>
              </Link>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CategoryCarousel;
