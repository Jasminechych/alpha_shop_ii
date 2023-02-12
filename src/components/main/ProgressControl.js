import { ReactComponent as RightArrow } from "../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from '../icons/left-arrow.svg'

import style from './ProgressControl.module.scss'

function ProgressControl() {
  return (
    <div className={style.progressControlContainer}>
      <button className={`${style.button} ${style.buttonPrev}`}>
        <LeftArrow />
        <p>上一步</p>
      </button>
      <button className={`${style.button} ${style.buttonNext}`}>
        <p>下一步</p>
        <RightArrow />
      </button>
    </div>
  );
}

export default ProgressControl;
