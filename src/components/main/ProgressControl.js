import { ReactComponent as RightArrow } from "src/assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "src/assets/icons/left-arrow.svg";

import style from "src/components/main/ProgressControl.module.scss";

function ProgressControl({ step, setStep }) {

  function handleOnClick(action) {
    if ((action === 'prev' && step === 1) || (action === "next" && step === 3)) return;
    if (action === "prev") {
      return setStep(prev => prev - 1)
    } else {
      return setStep(prev => prev + 1);
    }
  }

  return (
    <div className={style.progressControlContainer}>
      <button
        className={step === 1 ? style.none : style.buttonPrev}
        onClick={() => handleOnClick("prev")}
      >
        {step === 1 ? null : <LeftArrow />}
        {step === 1 ? null : <p>上一步</p>}
      </button>
      <button
        className={`${style.button} ${style.buttonNext}`}
        onClick={() => handleOnClick("next")}
      >
        <p>{step === 3 ? "確認下單" : "下一步"}</p>
        {step === 3 ? null : <RightArrow />}
      </button>
    </div>
  );
}

export default ProgressControl;
