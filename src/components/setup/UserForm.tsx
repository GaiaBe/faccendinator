import { useState } from "react";
import { formatDayName, WeekDays } from "../../utils/date";
import Button from "../common/Button";
import Card from "../common/Card";
import Switch from "../common/Switch";
import TextInput from "../common/TextInput";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addUser, removeDayFromUser, removeUser } from "../../store/userSlice";
import Chip from "../common/Chip";

interface UserFormProps {
  onNext: () => void;
}

const UserForm = ({onNext}: UserFormProps) => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string>('');
  const [userDays, setUserDays] = useState<number[]>([]);
  const { users } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch();
  return (
    <div className="flex mt-5 flex-col items-center">
      <div className="w-[50%]">
        <Card title={t('setup.roommate') + ' ' + (users.length + 1)} >
          <div>
            <TextInput
              label={t('setup.userName')}
              onChange={(name) => setUserName(name)}
              value={userName}
            />
            <p className="my-5">{t('setup.daysHome')}</p>
            {WeekDays.map((weekday) =>
              <div>
              <Switch
                label={t(`days.${weekday.label}`)}
                checked={userDays.includes(weekday.id)}
                onChange={(checked) => 
                  !checked ? setUserDays([...userDays, weekday.id])
                  : 
                  setUserDays(userDays.filter((day) => day !== weekday.id))
                }
              />
              <div className="bg-primary w-full h-[1px] my-2" />
              </div>
              
            )}
          </div>
        </Card>
        <div className="flex justify-center my-3">
          <Button
            icon={faPlus}
            label="Aggiungi"
            variant={userName !== '' && userDays.length > 0 ? 'primary' : 'ghost'}
            onClick={() => {
              dispatch(
                addUser(
                  {
                    id: JSON.stringify(Math.random()),
                    daysHome: userDays,
                    name: userName
                  }
                )
              );
              setUserName('');
              setUserDays([]);
            }}
          />
        </div>
      </div>
      <div className="flex gap-4 justify-start flex-col">
        {users.length > 0 &&
          <>
            <h2 className="text-slate-600 px-4 pt-3 flex justify-center text-2xl">
            Recap:
            </h2>
            {users.map((user) => (
            <Card
              key={user.id}
              title={user.name}
              deletable
              deleteAction={() => dispatch(removeUser(user.id))}
            >
              <div className="flex justify-evenly">
                  <div key={user.id}>
                    <div className="flex gap-2">
                      {user.daysHome.map((day) => (
                          <Chip
                            key={day}
                            label={formatDayName(day)}
                            deleteAction={() => {dispatch(removeDayFromUser({userId: user.id, dayToRemove: day}))}}
                          />
                        )
                      )}
                    </div>
                  </div>
              </div>
            </Card>
            ))}
            <Button label="Avanti" onClick={() => {onNext()}} variant={users.length > 1 ? 'primary' : 'ghost'} />
          </>
        }
      </div>
    </div>
  )
}

export default UserForm;
