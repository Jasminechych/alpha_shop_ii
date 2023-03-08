import { createContext, useContext, useState, useMemo } from "react";

const dummyData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartData, setCartData] = useState(dummyData);

  const total = cartData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);

  const cartContextData = useMemo(() => {
    return { cartData, setCartData, total };
  }, [cartData, setCartData, total]);

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
}

function useCartData() {
  const cartContextData = useContext(CartContext);

  if (cartContextData === undefined) {
    throw new Error("useCartData must be used within a CartProvider");
  }
  return cartContextData;
}

export { CartProvider, useCartData };
