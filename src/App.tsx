import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useState} from 'react';

// Components
import { Preview } from './components/Preview';
import { UserInput } from './components/UserInput';
import { SpeedInfo } from './components/SpeedInfo';
import { ResetBtn } from './components/ResetBtn';
import { TestBtn } from './components/TestBtn';
import User from './components/User';
import Login from './components/Login';

// Context
import { TypingProvider } from './state/context';
import ProfileLink from './components/ProfileLink';
import { Person } from '@material-ui/icons';

function App() {
  const [user, setUser]: any = useState(JSON.parse(localStorage.getItem('user')!));
  const [highScr, setScore]: any = useState(null);

  return (
    <Router>
      <div>
        <nav className="navContainer">
          <ul className="ul">
            <li><Link className="link" to="/"><h1 className="heading">Melange</h1></Link></li>
          </ul>
          <ul className="ul">
            <li><Link className="link" to="/user"><ProfileLink user={user} /><Person /></Link></li>
            <li><Link className="link" to="/login">Login/Sign-up</Link></li>
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
              <SpeedInfo user={user} highScr={highScr}/>
            </div>
            <ResetBtn />
            <TestBtn />
          </TypingProvider>
        </div>
      </Route>

      <Route path="/user">
        <User user={user} highScr={highScr}/>
      </Route>

      <Route path="/login">
        <Login setUser={setUser} setScore={setScore}/>
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
