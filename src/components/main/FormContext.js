import { createContext, useContext, useState } from "react";
import { useCartData } from "src/components/Main/Cart/CartContext";
import style from "src/components/Main/Step2/Step2.module.scss";

// 創建 Context
const FormContext = createContext();

// 定義 Provider
function FormProvider({ children }) {
  const { total } = useCartData();
  // 要先定義資料結構變成 controlled component, 若是空物件為 uncontrolled component, 會在元件中無法指定 value 值
  const [customerInfo, setCustomerInfo] = useState({
    稱謂: "",
    姓名: "",
    電話: "",
    Email: "",
    縣市: "",
    地址: "",
    持卡人姓名: "",
    卡號: "",
    有效期限: "",
    "CVC / CCV": "",
  });

  function handleFormChange(e) {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value || "",
    });
  }

  // step2 的功能
  const [isChecked, setIsChecked] = useState({
    id: "standard",
    shippingFee: 0,
    style: `${style.isCheckedRadioGroup}`,
  });

  function handleChange(id, shippingFee) {
    setIsChecked({
      ...isChecked,
      id: id,
      shippingFee: Number(shippingFee),
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(
      "Customer Info: ",
      customerInfo,
      "Shipping Method: ",
      isChecked.id,
      "Order Price: ",
      isChecked.shippingFee + total
    );
  }

  // 要給 Provider 的值與功能
  const formContextData = {
    customerInfo,
    handleFormChange,
    handleFormSubmit,
    isChecked,
    handleChange,
  };

  return (
    <FormContext.Provider value={formContextData}>
      {children}
    </FormContext.Provider>
  );
}

// 使用 Context 的 Hook
function useFormData() {
  const formContextData = useContext(FormContext);

  if (formContextData === undefined) {
    throw new Error("useFormData must be used within a FormProvider");
  }

  return formContextData;
}

export { FormProvider, useFormData };
