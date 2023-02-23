import style from "src/components/common/Select/Select.module.scss";

function Select({ name, data, className }) {
  return (
    <div className={className}>
      <div className={style.selectGroup}>
        <div className={style.selectLabel}>{name}</div>
        <div className={style.selectWrapper}>
          <select name={name} className={style.select}>
            {data.map((item, index) => {
              const { value, title } = item;
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
