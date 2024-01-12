interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDisable: boolean;
}

const BuyButton = ({ setModal, isDisable }: Props) => {
  const handleClick = () => {
    setModal(true);
  };
  return (
    <>
      {isDisable ? (
        <button className="btn btn-primary" onClick={handleClick} disabled>
          구매하기
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleClick}>
          구매하기
        </button>
      )}
    </>
  );
};

export default BuyButton;
