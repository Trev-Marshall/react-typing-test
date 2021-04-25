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

function App() {
  const [user, setUser]: any = useState(JSON.parse(localStorage.getItem('user')!));
  const [highScr, setScore]: any = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"><h1>Melange</h1></Link></li>
          </ul>
          <ul>
            <li><Link to="/user"><ProfileLink user={user} /></Link></li>
            <li><Link to="/login">Login/Sign-up</Link></li>
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
