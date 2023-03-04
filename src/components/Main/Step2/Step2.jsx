import { useFormData } from "src/components/Main/FormContext";
import style from "src/components/Main/Step2/Step2.module.scss";

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
        />
        <RadioGroup
          id="DHL"
          shippingMethod="DHL 貨運"
          shippingFee="500"
          shipmentPeriod="48 小時內發送"
        />
      </div>
    </>
  );
}

function RadioGroup({ id, shippingMethod, shippingFee, shipmentPeriod }) {
  const { isChecked, handleChange } = useFormData();

  let radioStyle = style.radioGroup;
  if (id === isChecked.id) {
    radioStyle = style.radioGroupChecked;
  }

    return (
      <label
        htmlFor={id}
        className={radioStyle}
      >
        <input
          id={id}
          type="radio"
          name="運送方式"
          className={style.radio}
          checked={id === isChecked.id}
          onChange={() => handleChange(id, shippingFee)}
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
