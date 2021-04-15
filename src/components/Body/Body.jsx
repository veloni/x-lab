import React from 'react';

import Autorization from './Autorization/Autorization';
import RenderData from './RenderData/RenderData';

import useLoadData from '../../hooks/useLoadData';
import useSwitcher from '../../hooks/useSwitcher';

import './Body.scss';

const Body = () => {
  const [ 
    autorizationFunc,
    isCorrectLogPas,
    dataUser, 
    setDataUsers,
    isAutorization,
    saveDataForSort,
    setIsCorrectLogPas,
    logRef,
    pasRef,
  ] = useLoadData();

  const [
    sortById,
    filtrByName,
    refIputUserName,
    directionSort,
  ] = useSwitcher(
    dataUser,
    setDataUsers,
    saveDataForSort,
  );

  return (
    <div>
      {!isAutorization && 
        <Autorization
          logRef={logRef}
          pasRef={pasRef}
          isCorrectLogPas={isCorrectLogPas}
          autorizationFunc={autorizationFunc}
          setIsCorrectLogPas={setIsCorrectLogPas}
        />}

      {isAutorization &&
        <RenderData
          directionSort={directionSort}
          dataUser={dataUser}
          sortById={sortById}
          filtrByName={filtrByName}
          refIputUserName={refIputUserName}
        />
      }
    </div>
  );
}

export default Body;
