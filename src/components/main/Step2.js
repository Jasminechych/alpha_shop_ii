import style from "./Step2.module.scss";

function Step2({ title }) {
  return (
    <>
      <h3 className={style.formTitle}>{title}</h3>
      <div className={style.radioWrapper}>
        <label htmlFor="standard" className={style.radioGroup}>
          <input id="standard" type="radio" className={style.radio} defaultChecked/>
          <div className={style.radioInfo}>
            <div className={style.shippingInfo}>
              <p className={style.standardShipping}>標準運送</p>
              <p className={style.shippingFee}>免費</p>
            </div>
            <p className={style.shipmentPeriod}>約 3~7 個工作天</p>
          </div>
        </label>
        <label htmlFor="DHL" className={style.radioGroup}>
          <input id="DHL" type="radio" className={style.radio} />
          <div className={style.radioInfo}>
            <div className={style.shippingInfo}>
              <p className={style.standardShipping}>DHL 貨運</p>
              <p className={style.shippingFee}>$500</p>
            </div>
            <p className={style.shipmentPeriod}>48 小時內發送</p>
          </div>
        </label>
      </div>
    </>
  );
}

export default Step2;
