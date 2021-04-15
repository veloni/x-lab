import React from 'react'

import './RenderData.scss';

import Switcher from './Switcher/Switcher';
import UserData from './UserData/UserData';

const RenderData = ({
  dataUser,
  sortById,
  filtrByName,
  refIputUserName,
  directionSort,
}) => (
  <div className="wrapper-main">
    <div className="wrapper-switcher-user-data">
      <Switcher
        sortById={sortById}
        filtrByName={filtrByName}
        refIputUserName={refIputUserName}
        directionSort={directionSort}
      />
      <UserData
        dataUser={dataUser}
        filtrByName={filtrByName}
        refIputUserName={refIputUserName}
      />
    </div>
  </div>
)

export default RenderData;