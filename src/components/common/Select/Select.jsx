import style from "src/components/common/Select/Select.module.scss";
import { useFormData } from "src/components/Main/FormContext";

function Select({ title, data, className }) {
  const { customerInfo, handleFormChange } = useFormData();

  return (
    <div className={className}>
      <div className={style.selectGroup}>
        <div className={style.selectLabel}>{title}</div>
        <div className={style.selectWrapper}>
          <select
            name={title}
            className={style.select}
            value={customerInfo[title]}
            onChange={handleFormChange}
          >
            {data.map(({ value, title }, index) => {
              if (index === 0) {
                return (
                  <option key={value} value={value} defaultValue>
                    {title}
                  </option>
                );
              } else {
                return (
                  <option key={value} value={value}>
                    {title}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Select;
