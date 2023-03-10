import { ReactComponent as Plus } from "src/assets/icons/plus.svg";
import { ReactComponent as Minus } from "src/assets/icons/minus.svg";
import { useCartData } from "src/components/Main/Cart/CartContext";
import { useFormData } from "src/components/Main/FormContext";
import style from "src/components/Main/Cart/Cart.module.scss";

function addCommas(num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function Cart() {
  const { cartData, total } = useCartData();
  const { deliveryType } = useFormData();

  return (
    <div className={style.cartContainer}>
      <h4 className={style.cartName}>購物籃</h4>
      <div className={style.cartWrapper}>
        <div className={style.itemWrapper}>
          {cartData
            .filter(({ quantity }) => quantity >= 1)
            .map(({ id, name, img, price, quantity }) => {
              return (
                <CartItem
                  key={id}
                  id={id}
                  name={name}
                  img={img}
                  price={price}
                  quantity={quantity}
                  addCommas={addCommas}
                />
              );
            })}
        </div>
        <div className={style.calculateWrapper}>
          <CalculateBlock
            calculateName="運費"
            calculateAmount={String(deliveryType.shippingFee)}
          />
          <CalculateBlock
            calculateName="小記"
            calculateAmount={total + deliveryType.shippingFee}
          />
        </div>
      </div>
    </div>
  );
}

function CartItem({ id, name, img, price, quantity }) {
  const { cartData, setCartData } = useCartData();

  function handleOnClick(id, action) {
    setCartData(
      cartData.map((data) => {
        if (data.id === id && action === "minus") {
          return { ...data, quantity: quantity - 1 };
        } else if (data.id === id && action === "plus") {
          return { ...data, quantity: quantity + 1 };
        }
        return data;
      })
    );
  }

  return (
    <div id={id} className={style.itemBlock}>
      <img src={img} alt="itemImage" className={style.itemImg} />
      <div className={style.itemInfoWrapper}>
        <div className={style.itemInfo}>
          <p className={style.itemName}>{name}</p>
          <div className={style.itemQuantity}>
            <Minus onClick={() => handleOnClick(id, "minus")} />
            <p>{quantity}</p>
            <Plus onClick={() => handleOnClick(id, "plus")} />
          </div>
        </div>
        <p className={style.itemAmount}>{"$" + addCommas(price * quantity)}</p>
      </div>
    </div>
  );
}

function CalculateBlock({ calculateName, calculateAmount }) {
  return (
    <div className={style.calculateBlock}>
      <p className={style.calculateName}>{calculateName}</p>
      <p className={style.calculateAmount}>
        {calculateAmount === "0" ? "免費" : "$" + addCommas(calculateAmount)}
      </p>
    </div>
  );
}

export default Cart;
