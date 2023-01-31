import React, { useContext } from 'react';
//?Import Link
import { Link } from 'react-router-dom';
//?Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
//?Import Components
import CartItem from './CartItem';
//?Import Sidebar Context
import { SidebarContext } from '../contexts/SidebarContext';
//?Import Cart Context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          shopping Bag ({itemAmount})
        </div>
        {/*ICON*/}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 justify-center items-center"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </div>
      </div>
      <div
        className=" mb-7 overflow-x-hiddenflex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-auto border-b
      "
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}{' '}
      </div>
      <div className=" flex w-full justify-between items-center flex-col">
        <div className="flex w-full justify-between items-center ">
          {/*total*/}
          <div className=" uppercase font-semibold">
            <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart*/}
          <div
            onClick={clearCart}
            className="cursor-poiter py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex p-4  flex-col w-full m-3 ">
          <Link
            to="/"
            className=" flex bg-gray-200 p-4 justify-center items-center text-primary w-full font-medium m-auto mb-1"
          >
            View cart
          </Link>
          <Link className="flex bg-primary p-4 justify-center items-center text-white w-full font-medium m-auto mt-1">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
