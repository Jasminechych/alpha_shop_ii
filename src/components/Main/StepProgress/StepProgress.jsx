import { ReactComponent as PgComplete } from "src/assets/icons/pg-complete.svg";

import style from "src/components/Main/StepProgress/StepProgress.module.scss";

function StepProgress({ step }) {
  return (
    <div className={style.stepProgressContainer}>
      <StepItem
        stepNumber="1"
        isStep1Active={step === 1}
        isStepComplete={step > 1}
      />
      <StepConnecter isConnecterActive={step > 0} />
      <StepItem
        stepNumber="2"
        isStepActive={step === 2}
        isStepComplete={step > 2}
      />
      <StepConnecter isConnecterActive={step > 1} />
      <StepItem
        stepNumber="3"
        isStepActive={step === 3}
        isStepComplete={step > 3}
      />
    </div>
  );
}

function StepItem({ stepNumber, isStep1Active, isStepActive, isStepComplete }) {
  return (
    <div
      className={style.step}
      data-active={isStepActive}
      data-oneactive={isStep1Active}
    >
      {isStepComplete ? <PgComplete /> : stepNumber}
    </div>
  );
}

function StepConnecter({ isConnecterActive }) {
  return (
    <span
      className={style.stepConnecter}
      data-active={isConnecterActive}
    ></span>
  );
}

export default StepProgress;
