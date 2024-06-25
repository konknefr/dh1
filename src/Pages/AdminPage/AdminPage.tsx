import cn from 'classnames';
import React, { useState } from 'react';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';
import Button from '../../components/UI/Buttons/Button/Button';
import H3 from '../../components/UI/Titles/H3/H3';
import s from './AdminPage.module.scss';
import AdminInfo from './components/AdminInfo/AdminInfo';
import data from '../../data/web.json';
import DropdownWeb from '../../components/Dropdown/DropdownWeb/DropdownWeb';
import DropdownTier from '../../components/Dropdown/DropdownTier/DropdownTier';
import DropdownStatus from '../../components/Dropdown/DropdownStatus/DropdownStatus';
import DropdownAction from '../../components/Dropdown/DropdownAction/DropdownAction';
import Tag from '../../components/Tag/Tag';

const AdminPage = () => {
  const [web, setWeb] = useState<string[]>([]);
  const [action, setAction] = useState<string[]>([]);

  const handleWeb = (webList: string[]) => {
    setWeb(webList);
  };

  const handleAction = (actionList: string[]) => {
    setAction(actionList);
  };

  return (
    <div className={s.admin}>
      <ContainerContent>
        <div className={s.admin__info}>
          <H3 className={s.admin__h3}>Добавление проекта</H3>
          <div className={s.admin__wrapper}>
            <div className={s.admin__row}>
              <div className={s.admin__left}>
                <div className={cn(s.admin__container, s.border)}>
                  <div>
                    <Input name="Cryptorank" placeholder="Cryptorank" label="Cryptorank" />
                    <Button color="primary" position="admin" text="Получить данные" />
                  </div>
                  <div>
                    <Input name="Cryptorank" placeholder="Twitterscore" label="Twitterscore" />
                    <Button color="primary" position="admin" text="Получить данные" />
                  </div>
                </div>
              </div>
              <div className={s.admin__right}>
                <div className={cn(s.admin__container, s.border)}>
                  <AdminInfo />
                </div>
              </div>
            </div>
            <div className={cn(s.admin__container, s.border)}>
              <div className={s.admin__settings}>
                <div className={s.admin__webTag}>
                  {web.length !== 0 && web.map((item) => <Tag key={item} text={item} />)}
                </div>
                <div className={s.admin__flex}>
                  <DropdownWeb handleWeb={handleWeb} />
                  <DropdownTier />
                  <DropdownStatus />
                  <DropdownAction handleAction={handleAction} />
                  <div className={s.admin__actionTag}>
                    {action.length !== 0 && action.map((item) => <Tag key={item} text={item} />)}
                  </div>
                </div>
                <div className={s.admin__flex}>
                  <Input name="Затраты" label="Примерные затраты" value="" />
                  <Input name="Deadline" label="Deadline DD:MM:YY" value="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

export default AdminPage;
