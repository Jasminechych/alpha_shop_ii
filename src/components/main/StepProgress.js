import { ReactComponent as PgComplete } from "../icons/pg-complete.svg";

import style from "./StepProgress.module.scss";

function StepProgress({ step }) {
  return (
    <div className={style.stepProgressContainer}>
      <div className={step === 1 ? style.step1 : null}>
        {step > 1 ? <PgComplete /> : 1}
      </div>
      <span
        className={step >= 1 ? style.activeConnector : style.stepConnecter}
      ></span>
      <div
        className={step > 2 ? null : step === 2 ? style.activeStep : style.step}
      >
        {step > 2 ? <PgComplete /> : 2}
      </div>
      <span
        className={step >= 2 ? style.activeConnector : style.stepConnecter}
      ></span>
      <div className={style.step}>3</div>
    </div>
  );
}

export default StepProgress;
