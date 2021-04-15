import { useState, useRef } from 'react';

const useSwitcher = (
  dataUser,
  setDataUsers,
  saveDataForSort,
) => {
  const [directionSort, setDirectionSort] = useState(true);
  const refIputUserName = useRef(null);

  const sortById = () => {
    const sorted = dataUser.sort((first, sec) => {
      const direction = directionSort ? 1 : -1 ;

			const x = first.id;
			const y = sec.id;

			return x < y ? direction : x > y ? -direction : 0;
		});

    setDataUsers(sorted);
    setDirectionSort(!directionSort);
  }

  const filtrByName = () => {
    if (refIputUserName.current.value === '') {
      setDataUsers(saveDataForSort);
      return;
    }

    const filtred = saveDataForSort.map((item) => { 
      if (item.username.includes(refIputUserName.current.value)) {
        return item;
      } else {
        return null;
      }
		});

    setDataUsers(filtred);
  };

  return [
    sortById,
    filtrByName,
    refIputUserName,
    directionSort,
  ];
}

export default useSwitcher;