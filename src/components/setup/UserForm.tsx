import { useTranslation } from "react-i18next";
import Card from "../common/Card";
import TextInput from "../common/TextInput";
import { useState } from "react";
import Switch from "../common/Switch";
import { WeekDays } from "../../utils/date";

const UserForm = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string>('');
  const [userDays, setUserDays] = useState<number[]>([]);
  return (
    <div>
      <h2 className="text-slate-600 px-4">
        {t('setup.addUser')}
      </h2>
      <div className="flex gap-4">
        <Card title={t('setup.roommate') + ' 1'} >
          <div>
            <TextInput
              label={t('setup.userName')}
              onChange={(name) => setUserName(name)}
            />
            <label>{t('setup.daysHome')}</label>
            {WeekDays.map((weekday) =>
              (
                <Switch
                  label={t(`days.${weekday.label}`)}
                  checked={userDays.includes(weekday.id)}
                  onChange={(checked) => 
                    !checked ? setUserDays([...userDays, weekday.id])
                    : 
                    setUserDays(userDays.filter((day) => day !== weekday.id))
                  }
                />
              )
            )}
          </div>
        </Card>
        <Card title={t('setup.roommate') + ' 2'} />

        <div>{userName} - {userDays}</div>
      </div>
    </div>
  )
}

export default UserForm;
