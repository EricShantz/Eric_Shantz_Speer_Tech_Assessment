import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import CallHistory from './Pages/CallHistory.jsx'
import Contacts from './Pages/Contacts.jsx'
import Keypad from './Pages/Keypad.jsx'
import TabBar from './Components/TabBar.jsx'

const App = () => {
  const [currentPage, setCurrentPage] = useState('CallHistory')

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">

        {currentPage === 'CallHistory' && <CallHistory />}
        {currentPage === 'Contacts' && <Contacts />}      
        {currentPage === 'Keypad' && <Keypad />}   

        <TabBar currentTab={currentPage} setCurrentTab={setCurrentPage} />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
