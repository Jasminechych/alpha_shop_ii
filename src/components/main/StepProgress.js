
import style from './StepProgress.module.scss'

function StepProgress() {
  return (
    <div className={style.stepProgressContainer}>
      <div className={`${style.step} ${style.activeStep}`}>1</div>
      <span className={`${style.stepConnecter} ${style.activeConnector}`}></span>
      <div className={style.step}>2</div>
      <span className={style.stepConnecter}></span>
      <div className={style.step}>3</div>
    </div>
  );
}

export default StepProgress