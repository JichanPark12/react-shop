import config from '../../constants/config';
import { Rating } from '../../interface/product/productInterface';

interface ProductRatingInterface {
  rating: Rating;
}

const ProductRating = ({ rating }: ProductRatingInterface) => {
  return (
    <div className="flex">
      <div className="rating rating-half mr-2">
        {Array.from({ length: config.defaultMaxRating * 2 }).map((_, idx) =>
          idx - 2 === Math.floor(rating.rate) ? (
            <input
              key={idx}
              type="radio"
              className={`rating bg-orange-400 mask mask-star-2 ${
                idx % 2 === 0 ? 'mask-half-1' : 'mask-half-2 '
              } cursor-default`}
              disabled
              checked
            />
          ) : (
            <input
              key={idx}
              type="radio"
              className={`rating bg-orange-400 mask mask-star-2 ${
                idx % 2 === 0 ? 'mask-half-1' : 'mask-half-2 '
              } cursor-default`}
              disabled
            />
          )
        )}
      </div>
      <div>{`${rating.rate} / ${rating.count} 참여`}</div>
    </div>
  );
};

export default ProductRating;
