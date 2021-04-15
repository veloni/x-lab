import React from 'react';

import { 
  giveDate
} from '../../../../../helper';

import './User.scss';

const User = ({ item }) => (
  item && <div className="wrapper-user">
    <div className="wrapper-user-text">
      <span className="user-text">
        Id пользователя
      </span>
      <span className="user-text">
        {item.id}
      </span>
    </div>
    <div className="wrapper-user-text">
      <span className="user-text">  
        Имя пользователя
      </span>
      <span className="user-text">  
        {item.username}
      </span>
    </div>
    <div className="wrapper-user-text">
      <span className="user-text">  
        {item.is_superuser ? "Администратор" : "Пользователь"}
      </span>
      <span className="user-text">  
        {item.is_active ? "В сети" : "Не в сети"}
      </span>
    </div>
    <div className="wrapper-user-text">
      <span className="user-text">  
        Последнее время авторизации
      </span>
      <span className="user-text">  
        {giveDate(item)}
      </span>
    </div>
    <div className="wrapper-user-text">
      <span className="user-text">  
        Дата регистрации
      </span>
      <span className="user-text">  
        {giveDate(item)}
      </span>
    </div>
    <div className="wrapper-user-text">
      <span>
        {item.is_staff ? "Персонал" : "Пользователь"}
      </span>
    </div>
  </div>
);

export default User;