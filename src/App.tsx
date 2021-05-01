import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { db } from './firebase/firebase';

// Components
import { Preview } from './components/Preview';
import { UserInput } from './components/UserInput';
import { SpeedInfo } from './components/SpeedInfo';
import User from './components/User';

// Context
import { TypingProvider } from './state/context';
import { Person } from '@material-ui/icons';

function App() {
  const [user, setUser]: any = useState(JSON.parse(localStorage.getItem('user')!));
  const [highScr, setScore]: any = useState(null);

  useEffect(() => {
    const wpmRef = db.collection("users").doc(user?.uid);
    if(user?.uid){
      wpmRef.get().then((doc) => {
        setScore(doc.data());
      });
    } else {
      setScore(null);
    }
  }, [user?.uid]);

  return (
    <Router>
      <div>
        <nav className="navContainer">
          <ul className="ul">
            <li><Link className="link" to="/"><h1 className="heading">Mélange</h1></Link></li>
          </ul>
          <ul className="ul second-ul">
            <li><Link className="link profile" to="/user"><Person fontSize="large" /></Link></li>
          </ul>
        </nav>
      </div>

    <Switch>
      <Route exact path="/">
        <div className='container'>
          <TypingProvider>
            <Preview />
            <UserInput />
            <div className='typing-speed'>
              <SpeedInfo user={user} highScr={highScr} setScore={setScore}/>
            </div>
            
          </TypingProvider>
        </div>
      </Route>

      <Route path={"/user"}>
        <User user={user} highScr={highScr} setUser={setUser} setScore={setScore}/>
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
