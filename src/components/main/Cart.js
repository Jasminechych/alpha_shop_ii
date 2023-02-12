import { ReactComponent as Plus } from "../icons/plus.svg";
// import { ReactComponent as Minus } from "../icons/right-arrow.svg";
import { ReactComponent as Minus } from "../../components/icons/minus.svg";

import style from "./Cart.module.scss";

function Cart() {
  return (
    <div className={style.cartContainer}>
      <h4 className={style.cartName}>購物籃</h4>
      <div className={style.itemWrapper}>
        <div className={style.itemBlock}>
          <div className={style.itemImg}>img</div>
          <div className={style.itemInfoWrapper}>
            <div className={style.itemInfo}>
              <p className={style.itemName}>商品名稱</p>
              <div className={style.itemQuantity}>
                <Plus />
                <p>1</p>
                <Minus />
              </div>
            </div>
            <p className={style.itemAmount}>1566</p>
          </div>
        </div>
        <div className={style.itemBlock}>
          <div className={style.itemImg}>img</div>
          <div className={style.itemInfoWrapper}>
            <div className={style.itemInfo}>
              <p className={style.itemName}>商品名稱</p>
              <div className={style.itemQuantity}>
                <Plus />
                <p>1</p>
                <Minus />
              </div>
            </div>
            <p className={style.itemAmount}>1566</p>
          </div>
        </div>
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

export default Cart;
