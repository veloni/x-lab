import React from 'react';

import './UserData.scss';

import User from './User/User';

const UserData = ({
  dataUser, 
  filtrByName, 
  refIputUserName
}) => (
  <div className="data-user-wrapper">
    {dataUser && dataUser.map((item, index) => (
      <User
        key={index}
        refIputUserName={refIputUserName}
        filtrByName={filtrByName}
        item={item}
      /> 
    ))} 
  </div>
);

export default UserData;