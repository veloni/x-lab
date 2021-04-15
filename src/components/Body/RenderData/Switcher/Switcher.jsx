import React from 'react';

import './Switcher.scss';

import aroowUp from './png/up-arrow-up.png';
import arrowDown from './png/up-arrow-down.png';

const Switcher = ({
  sortById,
  filtrByName,
  refIputUserName,
  directionSort,
}) => (
  <div className="wrapper-switcher">
    <div className="wrapper-filter">
      <span>
        Фильтрация по id
      </span>
      <img
        alt="arrow"
        className="arrow-switcher"
        src={directionSort ? arrowDown : aroowUp}
        onClick={() => sortById()}
      />
    </div>
    <div className="wrapper-sort">
      <span>
        Cортировка по userName
      </span>
      <input
        ref={refIputUserName}
        className="input-sort"
        onChange={() => filtrByName()}
      />
    </div>
  </div>
)

export default Switcher; 