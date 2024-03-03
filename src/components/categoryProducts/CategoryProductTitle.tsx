interface Props {
  category: string;
}

const CategoryProductTitle = ({ category }: Props) => {
  return (
    <h2 className="text-center font-bold mx-auto text-4xl px-3 mb-10">{category}</h2>
  );
};

export default CategoryProductTitle;
