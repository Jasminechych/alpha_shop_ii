import Input from "src/components/common/Input/Input";
import style from "src/components/Main/Step3/Step3.module.scss";

function Step3 ({ title }) {
  return (
    <>
      <h3 className={style.formTitle}>{title}</h3>
      <div className={style.formPanel}>
        <Input
          className={style.cardName}
          title="持卡人姓名"
          type="text"
          placeholder="John Doe"
        />
        <Input
          className={style.cardNumber}
          title="卡號"
          type="text"
          placeholder="1111 2222 3333 4444"
        />
        <Input
          className={style.cardValid}
          title="有效期限"
          type="text"
          placeholder="MM / YYYY"
        />
        <Input
          className={style.cardCvc}
          title="CVC / CCV"
          type="text"
          placeholder="123"
        />
      </div>
    </>
  );
}

export default Step3