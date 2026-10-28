import { type JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCheck } from "@fortawesome/free-solid-svg-icons";

interface SetupStepperProps {
  children?: JSX.Element;
  steps?: string[];
  currentStep?: number;
  onNext?: () => void;
  onPrev?: () => void;
}

const SetupStepper = ({children, currentStep = 1, steps}: SetupStepperProps) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        {steps?.map((item, index) => (
          <>
            <div
              className={`
                flex p-5 flex-1 rounded-lg items-center gap-3 shadow-lg
                ${index === currentStep ?
                  'border-primary border-2' :
                  index < currentStep ?
                  'bg-primary/20 text-primary' :
                  'border-grey-500 border-2 text-gray-500'
                }`
              }
            >
              <div className={`
                px-5 py-3 rounded-full  border-2
                ${index === currentStep ?
                  'border-primary text-primary bg-primary/20' :
                  index < currentStep ?
                  'bg-primary py-[0.9rem] px-[1rem] text-white' :
                  'border-grey-500'
                }`}>{index < currentStep ? <FontAwesomeIcon icon={faCheck} /> : index + 1}</div>
              {item}
            </div>
            {index < 2 && <FontAwesomeIcon icon={faAnglesRight} color="#10B981" />}
          </>
        ))}
      </div>
      {children}
    </div>
  )
}

export default SetupStepper;