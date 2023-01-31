import React, { createContext, useState, useEffect } from "react";

//?Create Context

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //?Cart State
  const [cart, setCart] = useState([]);
  //?Update Item Amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acummulator, currentItem) => {
        return acummulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  //?Item Amount State
  const [itemAmount, setItemAmount] = useState(0);

  //?Total Price State
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((acummulator, currentItem) => {
      return acummulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });
  //?Add To cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //?check if the item is alreay in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    //?if cart item is alreay in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //?Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  //?Clear Cart
  const clearCart = () => {
    setCart([]);
  };
  //?Increase Amount

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //?Decrease amount

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
