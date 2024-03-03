import { useState } from 'react';
import config from '../../constants/config';
import { ClickCounterHandler } from '../../interface/product/quantityFuncInterface';

interface Props {
  handleClickCounter: ClickCounterHandler;
  quantity?: number;
  minValue: number;
}

const QuantityControl = ({ handleClickCounter, quantity, minValue }: Props) => {
  const initValue = quantity ? quantity : 1;
  const [inputValue, setInputValue] = useState<number>(initValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = +e.target.value;

    isNaN(value) && (value = 1);

    setInputValue(value);
  };
  const handleInputBlur = () => {
    switch (true) {
      case inputValue > config.maxProductCount:
        setInputValue(config.maxProductCount);
        handleClickCounter(config.maxProductCount);
        return;

      case inputValue <= 0:
        handleClickCounter(minValue);
        setInputValue(minValue);
        return;

      default:
        handleClickCounter(inputValue);
    }
  };
  const handleDecrease = () => {
    if (inputValue <= minValue) return;

    setInputValue(inputValue - 1);
    handleClickCounter(inputValue - 1);
  };
  const handleIncrease = () => {
    if (inputValue >= config.maxProductCount) return;
    setInputValue(inputValue + 1);
    handleClickCounter(inputValue + 1);
  };
  return (
    <div className="flex items-center border-gray-500 border-2 max-w-32">
      <button className=" w-10 h-10 text-center font-bold" onClick={handleDecrease}>
        -
      </button>
      <input
        type="text"
        className="outline-none bg-transparent w-10 text-center"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button className="text-center w-10 h-10 font-bold" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
