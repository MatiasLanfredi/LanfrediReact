import React, { useContext } from 'react';
//?Import Link
import { Link } from 'react-router-dom';
//?Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
//?Import Cart Context
import { CartContext } from '../contexts/CartContext';
const CartItem = ({ item }) => {
  //?Remove Item
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  //?Destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/*IMAGE */}
        <Link to={`/products/${id}`}>
          <img className="max-w-[80px] " src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          {/*Title % remove icon*/}
          <div className="flex justify-between mb-2">
            <Link
              to={`/products/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline "
            >
              {title}
            </Link>
            {/*REMOVE ICON */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <FontAwesomeIcon
                className="text-gray-500 hover:text-red-500"
                icon={faXmark}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm ">
            {/* QUANTITY */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium ">
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full border-r-2"
              >
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}{' '}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer border-l-2"
              >
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </div>
            </div>
            {/*Item Price*/}
            <div className="flex-1 flex items-center justify-around ">
              $ {price}{' '}
            </div>
            {/*Final Price*/}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
