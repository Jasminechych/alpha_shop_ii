import { useFormData } from "src/components/Main/FormContext";
import style from "src/components/Main/Step2/Step2.module.scss";

const deliveryData = [
  {
    id: "standard",
    shippingMethod: "標準運送",
    shippingFee: "0",
    shipmentPeriod: "約 3~7 個工作天",
  },
  {
    id: "DHL",
    shippingMethod: "DHL 貨運",
    shippingFee: "500",
    shipmentPeriod: "48 小時內發送",
  },
];

function Step2({ title }) {
  return (
    <>
      <h3 className={style.formTitle}>{title}</h3>
      <div className={style.radioWrapper}>
        {deliveryData.map(
          ({ id, shippingMethod, shippingFee, shipmentPeriod }) => {
            return (
              <RadioGroup
                key={id}
                id={id}
                shippingMethod={shippingMethod}
                shippingFee={shippingFee}
                shipmentPeriod={shipmentPeriod}
              />
            );
          }
        )}
      </div>
    </>
  );
}

function RadioGroup({ id, shippingMethod, shippingFee, shipmentPeriod }) {
  const { deliveryType, handleDeliveryTypeChange } = useFormData();

  // 如果 id 為選中狀態，設定 radio 的 css 為 checked 狀態
  let radioStyle = style.radioGroup;
  if (id === deliveryType.id) {
    radioStyle = style.radioGroupChecked;
  }

  return (
    <label htmlFor={id} className={radioStyle}>
      <input
        id={id}
        type="radio"
        name="運送方式"
        className={style.radio}
        checked={id === deliveryType.id}
        onChange={() => handleDeliveryTypeChange(id, shippingFee)}
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
