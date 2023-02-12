import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";

import style from "./Main.module.scss";

function Main() {
  return (
    <main className={style.main}>
      <div className={style.mainContainer}>
        <h2 className={style.mainTitle}>結帳</h2>
        <div className={style.mainWrapper}>
          <div className={style.stepProgress}>
            <StepProgress />
          </div>
          <form className={style.form}>
            <Step1 title="寄送地址" />
            {/* <Step2 title="運送方式" /> */}
            {/* <Step3 title="付款資訊" /> */}
          </form>
          <div className={style.progressControl}>
            <ProgressControl className={style.progressControl} />
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
