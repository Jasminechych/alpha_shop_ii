import { ReactComponent as RightArrow } from "src/assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "src/assets/icons/left-arrow.svg";
import { useFormData } from "src/components/Main/FormContext";

import style from "src/components/Main/ProgressControl/ProgressControl.module.scss";

function ProgressControl({ step, setStep }) {
  const { handleFormSubmit } = useFormData();

  function handleOnClick(action) {
    if ((action === "prev" && step === 1) || (action === "next" && step === 3))
      return;
    if (action === "prev") {
      return setStep((prev) => prev - 1);
    } else {
      return setStep((prev) => prev + 1);
    }
  }

  return (
    <div className={style.progressControlContainer}>
      <Button
        className={step === 1 ? style.none : style.buttonPrev}
        onClick={() => handleOnClick("prev")}
      >
        {step === 1 ? null : <LeftArrow />}
        {step === 1 ? null : <p>上一步</p>}
      </Button>

      {step < 3 && (
        <Button
          className={`${style.button} ${style.buttonNext}`}
          onClick={() => handleOnClick("next")}
        >
          <p>下一步</p>
          <RightArrow />
        </Button>
      )}

      {step === 3 && (
        <Button
          className={`${style.button} ${style.buttonNext}`}
          onClick={handleFormSubmit}
        >
          <p>確認下單</p>
        </Button>
      )}
    </div>
  );
}

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default ProgressControl;
