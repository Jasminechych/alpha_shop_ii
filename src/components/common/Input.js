// import css
import style from'./Input.module.scss'

function Input ({ name, type, placeholder, className }) {
  return (
    <div className={className}>
      <div className={style.inputGroup}>
        <div className={style.inputLabel}>{name}</div>
        <input
          className={style.input}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input