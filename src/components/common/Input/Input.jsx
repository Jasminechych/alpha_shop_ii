import { useFormData } from "src/components/Main/FormContext";

import style from "src/components/common/Input/Input.module.scss";

function Input({ title, type, placeholder, className }) {
  const { customerInfo, handleFormChange } = useFormData();

  return (
    <div className={className}>
      <div className={style.inputGroup}>
        <div className={style.inputLabel}>{title}</div>
        <input
          className={style.input}
          name={title}
          type={type}
          placeholder={placeholder}
          // 不能用 name 當 props 傳名稱
          value={customerInfo[title]}
          onChange={handleFormChange}
        />
      </div>
    </div>
  );
}

export default Input;
