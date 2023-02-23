import { useState, useEffect } from "react";
import { ReactComponent as PgComplete } from "src/assets/icons/pg-complete.svg";

import style from "src/components/Main/StepProgress/StepProgress.module.scss";

// 第一種
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
      <div className={step === 3 ? style.activeStep : style.step}>3</div>
    </div>
  );
}

export default StepProgress;



// 第二種
// 抽出 Step component
// 以傳入的 step props 判斷 StepProgress 要渲染 Step 圓圈還是 Complete icon

// function StepProgress({ step }) {
//   return (
//     <div className={style.stepProgressContainer}>
//       {step > 1 ? (
//         <PgComplete />
//       ) : (
//         <Step num="1" className={step === 1 ? style.step1 : null} />
//       )}
//       <span
//         className={step >= 1 ? style.activeConnector : style.stepConnecter}
//       ></span>
//       {step > 2 ? (
//         <PgComplete />
//       ) : (
//         <Step
//           num="2"
//           className={
//             step > 2 ? null : step === 2 ? style.activeStep : style.step
//           }
//         />
//       )}

//       <span
//         className={step >= 2 ? style.activeConnector : style.stepConnecter}
//       ></span>
//       {step > 3 ? (
//         <PgComplete />
//       ) : (
//         <Step num="3" className={step === 3 ? style.activeStep : style.step} />
//       )}
//     </div>
//   );
// }

// function Step({ num, className }) {
//   return <div className={className}>{num}</div>;
// }




// 第三種
// 把每個 step 會有的狀態列出來
// 當 useEffect 的 dependency step 改變時做狀態切換

// function StepProgress({ step }) {
//   const [action, setAction] = useState({
//     isStep3Active: false,
//     isStep3ConnectorActive: false,
//     isStep2Complete: false,
//     isStep2Active: false,
//     isStep2ConnectorActive: false,
//     isStep1Complete: false,
//     isStep1Active: false,
//   });

//   useEffect(() => {
//     switch (step) {
//       case 1:
//         setAction({
//           isStep3Active: false,
//           isStep3ConnectorActive: false,
//           isStep2Complete: false,
//           isStep2Active: false,
//           isStep2ConnectorActive: true,
//           isStep1Complete: false,
//           isStep1Active: true,
//         });
//         break;
//       case 2:
//         setAction({
//           isStep3Active: false,
//           isStep3ConnectorActive: true,
//           isStep2Complete: false,
//           isStep2Active: true,
//           isStep2ConnectorActive: true,
//           isStep1Complete: true,
//           isStep1Active: false,
//         });
//         break;
//       case 3:
//         setAction({
//           isStep3Active: true,
//           isStep3ConnectorActive: true,
//           isStep2Complete: true,
//           isStep2Active: false,
//           isStep2ConnectorActive: true,
//           isStep1Complete: true,
//           isStep1Active: false,
//         });
//         break;
//       default:
//         throw new Error("Unknown step");
//     }
//   }, [step]);

//   return (
//     <div className={style.stepProgressContainer}>
//       <div className={action.isStep1Active ? style.step1 : null}>
//         {action.isStep1Complete ? <PgComplete /> : 1}
//       </div>
//       <span
//         className={
//           action.isStep2ConnectorActive
//             ? style.activeConnector
//             : style.stepConnecter
//         }
//       ></span>
//       <div className={action.isStep2Active ? style.activeStep : style.step}>
//         {action.isStep2Complete ? <PgComplete /> : 2}
//       </div>
//       <span
//         className={
//           action.isStep3ConnectorActive
//             ? style.activeConnector
//             : style.stepConnecter
//         }
//       ></span>
//       <div className={action.isStep3Active ? style.activeStep : style.step}>
//         3
//       </div>
//     </div>
//   );
// }