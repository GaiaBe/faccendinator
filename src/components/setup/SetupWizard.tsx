import { useTranslation } from "react-i18next";
import { useState } from "react";
import SetupStepper from './SetupStepper';
import HouseForm from "./HouseForm";
import Summary from "./Summary";
import UserForm from "./UserForm";

const SetupWizard = () => {
  const { t } = useTranslation();
  const [stepper, setStepper] = useState<number>(0);
  return (
    <div className="flex justify-between items-start gap-10">
      <SetupStepper
        steps={[t('setup.addUser'), t('setup.addUser'), t('setup.addUser')]}
        currentStep={stepper}
        children={
          stepper === 0 ? <UserForm onNext={() => setStepper(stepper + 1)} />
          : stepper === 1 ? <HouseForm />
          : <Summary />
        }
      />
    </div>
  )
}

export default SetupWizard;