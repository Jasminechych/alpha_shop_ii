import Input from "src/components/common/Input/Input";

import style from "src/components/Main/Step3/Step3.module.scss";

function Step3 ({ title }) {
  return (
    <>
      <h3 className={style.formTitle}>{title}</h3>
      <div className={style.formPanel}>
        <Input
          className={style.cardName}
          name="持卡人姓名"
          type="text"
          placeholder="John Doe"
        />
        <Input
          className={style.cardNum}
          name="卡號"
          type="text"
          placeholder="1111 2222 3333 4444"
        />
        <Input
          className={style.cardValid}
          name="有效期限"
          type="text"
          placeholder="MM / YYYY"
        />
        <Input
          className={style.cardCvc}
          name="CVC / CCV"
          type="text"
          placeholder="123"
        />
      </div>
    </>
  );
}

export default Step3