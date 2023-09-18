import React, { useEffect, useState } from 'react';
import { GetCallHistory } from '../APIs/ApplicationAPIS';
import GenerateListItems from '../Components/GenerateListItems';
import '../css/list-items.css';


const CallHistory = () => {
  const [listItems, setListItems] = useState([]); 

  useEffect(() => {
    GetCallHistory()
      .then(data => {
        const items = GenerateListItems(data);
        setListItems(items);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='list-items'>
      {listItems}
    </div>
  );
};

export default CallHistory;
