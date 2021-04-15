import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

const useLoadData = () => {
  const [userKey, setserKey] = useState(null);
  const [dataUser, setDataUsers] = useState([]);
  const [isAutorization, setIsAutorization] = useState(false);
  const [saveDataForSort, setSaveDataForSort] = useState([]);
  const [isCorrectLogPas, setIsCorrectLogPas] = useState(false);

  const logRef = useRef(null);
	const pasRef = useRef(null);
  
  const autorizationFunc = () => {
    const urlLogin = 'https://agile-garden-50413.herokuapp.com/api/token/login/';
        
      axios(urlLogin, { 
        method: 'post',
        data: {
          "password": pasRef.current.value,
          "username": logRef.current.value,
        } 
      })
      .then (responce => giveToken(responce))  
      .catch(setIsCorrectLogPas(true));
  }

  useEffect(() => {
    const urlGetUser = 'https://agile-garden-50413.herokuapp.com/api/users/';
    
    axios.get(urlGetUser, {
      headers: {
        'Authorization': `token ${userKey}`,
      }
    })
    .then(responce => loadData(responce))

  },[userKey]);  

  useEffect(() => {
    const userKeySave = localStorage.getItem('auth_token');

    if (userKeySave) {
      const urlGetUser = 'https://agile-garden-50413.herokuapp.com/api/users/';
      
      axios.get(urlGetUser, {
        headers: {
          'Authorization': `token ${userKeySave}`,
        }
      })
      .then(responce => keyExist(responce))
    }
  },[]);  

  const giveToken = (responce) => {
    setserKey(responce.data['auth_token']);
    localStorage.setItem('auth_token', responce.data['auth_token']);

    setIsAutorization(true);
  }

  const keyExist = (responce) => {
  /*   setDataUsers(responce['data']);
    setSaveDataForSort(responce['data']);
    
    setIsAutorization(true); */
  }

  const loadData = (responce) => {
    setDataUsers(responce['data']);
    setSaveDataForSort(responce['data']);
  }

  return [
    autorizationFunc,
    isCorrectLogPas,
    dataUser, 
    setDataUsers,
    isAutorization,
    saveDataForSort,
    setIsCorrectLogPas,
    logRef,
    pasRef,
  ];
};

export default useLoadData;