interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyButton = ({ setModal }: Props) => {
  const handleClick = () => {
    setModal(true);
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      구매하기
    </button>
  );
};

export default BuyButton;
