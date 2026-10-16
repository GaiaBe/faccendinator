import { useTranslation } from "react-i18next";
import Card from "../common/Card";
import TextInput from "../common/TextInput";
import { useState } from "react";
import Switch from "../common/Switch";
import { formatDayName, WeekDays } from "../../utils/date";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addUser, removeDayFromUser, removeUser } from "../../store/userSlice";
import Button from "../common/Button";
import Chip from "../common/Chip";

const UserForm = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string>('');
  const [userDays, setUserDays] = useState<number[]>([]);
  const { users } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-start gap-10">
      <div className="flex-[0.3]"></div>
      <div className="flex-[0.5]">
        <h2 className="text-slate-600 px-4 py-3 flex justify-center text-2xl">
          {t('setup.addUser')}
        </h2>
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
      <div className="flex gap-4 justify-start flex-[0.3] flex-col">
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
          </>
        }
      </div>
    </div>
  )
}

export default UserForm;