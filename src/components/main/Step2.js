import style from "./Step2.module.scss";

function Step2({ title }) {
  return (
    <>
      <h3 className={style.formTitle}>{title}</h3>
      <div className={style.radioWrapper}>
        <RadioGroup
          id="standard"
          shippingMethod="標準運送"
          shippingFee="0"
          shipmentPeriod="約 3~7 個工作天"
        >
          <input
            id="standard"
            type="radio"
            name="shipment"
            className={style.radio}
            defaultChecked
          />
        </RadioGroup>
        <RadioGroup
          id="DHL"
          shippingMethod="DHL 貨運"
          shippingFee="500"
          shipmentPeriod="48 小時內發送"
        >
          <input
            id="DHL"
            type="radio"
            name="shipment"
            className={style.radio}
          />
        </RadioGroup>
      </div>
    </>
  );
}

function RadioGroup({ id, shippingMethod, shippingFee, shipmentPeriod }) {
  return (
    <label htmlFor={id} className={style.radioGroup}>
      <input
        id={id}
        type="radio"
        name="shipment"
        className={style.radio}
        defaultChecked={id === "standard"}
      />
      <div className={style.radioInfo}>
        <div className={style.shippingInfo}>
          <p className={style.shippingMethod}>{shippingMethod}</p>
          <p className={style.shippingFee}>
            {shippingFee === "0" ? "免費" : "$" + shippingFee}
          </p>
        </div>
        <p className={style.shipmentPeriod}>{shipmentPeriod}</p>
      </div>
    </label>
  );
}

export default Step2;
