import { useState } from "react";
import Button from "../common/Button";

const SetupStepper = () => {
  const [stepper, setStepper] = useState<number>(1)
  return (
    <div>
      <div className="">step 1</div>
      <div>step 2</div>
      <div>step 3</div>
      {stepper === 1 && (
        <div>
          Step 1
          <Button
            label="Avanti"
            onClick={() => setStepper(stepper + 1)}
          />
        </div>
      )}
      {stepper === 2 && (
        <div>
          Step 2
          <Button
            label="Avanti"
            onClick={() => setStepper(stepper + 1)}
          />
        </div>
      )}
      {stepper === 3 && (
        <div>
          Step 3
          <Button
            label="Avanti"
            onClick={() => setStepper(1)}
          />
        </div>
      )}
    </div>
  )
}

export default SetupStepper;