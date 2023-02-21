import StepProgress from "src/components/main/StepProgress";
import Step1 from "src/components/main/Step1";
import Step2 from "src/components/main/Step2";
import Step3 from "src/components/main/Step3";
import ProgressControl from "src/components/main/ProgressControl";
import Cart from "src/components/main/Cart";
import { useState } from "react";

import style from "src/components/main/Main.module.scss";

function Main() {
  const [step, setStep] = useState(1)

  return (
    <main className={style.main}>
      <div className={style.mainContainer}>
        <h2 className={style.mainTitle}>結帳</h2>
        <div className={style.mainWrapper}>
          <div className={style.stepProgress}>
            <StepProgress step={step}/>
          </div>
          <form className={style.form}>
            {step === 1 && <Step1 title="寄送地址" />}
            {step === 2 && <Step2 title="運送方式" />}
            {step === 3 && <Step3 title="付款資訊" />}
          </form>
          <div className={style.progressControl}>
            <ProgressControl
              className={style.progressControl}
              step={step}
              setStep={setStep}
            />
          </div>
          <div className={style.cart}>
            <Cart />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
