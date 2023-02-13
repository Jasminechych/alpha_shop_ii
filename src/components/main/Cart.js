import { ReactComponent as Plus } from "../icons/plus.svg";
import { ReactComponent as Minus } from "../../components/icons/minus.svg";

import style from "./Cart.module.scss";

const cartData = [
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

function Cart() {
  return (
    <div className={style.cartContainer}>
      <h4 className={style.cartName}>購物籃</h4>
      <div className={style.itemWrapper}>
        {cartData.map((item) => {
          const { id, name, img, price, quantity } = item;
          return (
            <CartItem
              key={id}
              id={id}
              name={name}
              img={img}
              price={price}
              quantity={quantity}
            />
          );
        })}
      </div>

      <div className={style.calculateWrapper}>
        <div className={style.calculateBlock}>
          <p className={style.calculateName}>運費</p>
          <p className={style.calculateAmount}>免費</p>
        </div>
        <div className={style.calculateBlock}>
          <p className={style.calculateName}>小記</p>
          <p className={style.calculateAmount}>$9999</p>
        </div>
      </div>
    </div>
  );
}

function CartItem({ key, id, name, img, price, quantity }) {
  return (
    <div key={key} id={id} className={style.itemBlock}>
      <img src={img} alt="itemImage" className={style.itemImg} />
      <div className={style.itemInfoWrapper}>
        <div className={style.itemInfo}>
          <p className={style.itemName}>{name}</p>
          <div className={style.itemQuantity}>
            <Plus />
            <p>{quantity}</p>
            <Minus />
          </div>
        </div>
        <p className={style.itemAmount}>{price}</p>
      </div>
    </div>
  );
}

export default Cart;