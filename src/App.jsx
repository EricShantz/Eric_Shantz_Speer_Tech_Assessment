import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import CallHistory from './Pages/CallHistory.jsx';
import Contacts from './Pages/Contacts.jsx';
import Keypad from './Pages/Keypad.jsx';
import TabBar from './Components/TabBar.jsx';
import { CSSTransition } from 'react-transition-group';

const App = () => {
  const [currentPage, setCurrentPage] = useState('CallHistory');

  return (
    <div className='container'>
      <Header />
      <div className="container-view">
        <CSSTransition
          in={currentPage === 'CallHistory'}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <CallHistory />
        </CSSTransition>

        <CSSTransition
          in={currentPage === 'Contacts'}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <Contacts />
        </CSSTransition>

        <CSSTransition
          in={currentPage === 'Keypad'}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <Keypad />
        </CSSTransition>

        <TabBar currentTab={currentPage} setCurrentTab={setCurrentPage} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
