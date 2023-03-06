import { createContext, useContext, useState } from "react";
import { useCartData } from "src/components/Main/Cart/CartContext";

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

  // 設定表單更動的功能
  function handleFormChange(e) {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value || "",
    });
  }

  // step2 確認選定運費狀態的功能
  const [deliveryType, setDeliveryType] = useState({
    id: "standard",
    shippingFee: 0,
  });

  function handleDeliveryTypeChange(id, shippingFee) {
    setDeliveryType({
      ...deliveryType,
      id: id,
      shippingFee: Number(shippingFee),
    });
  }

  // 提交表單的功能
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(
      "Customer Info: ",
      customerInfo,
      "Shipping Method: ",
      deliveryType.id,
      "Order Price: ",
      deliveryType.shippingFee + total
    );
  }

  // 要給 Provider 的值與功能
  const formContextData = {
    customerInfo,
    handleFormChange,
    handleFormSubmit,
    deliveryType,
    handleDeliveryTypeChange,
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
