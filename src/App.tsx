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

function App() {
  const [user, setUser] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"><h1>Melange</h1></Link></li>
          </ul>
          <ul>
            <li><Link to="/user">Profile</Link></li>
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
              <SpeedInfo />
            </div>
            <ResetBtn />
            <TestBtn />
          </TypingProvider>
        </div>
      </Route>

      <Route path="/user">
        <User />
      </Route>

      <Route path="/login">
        <Login setUser={setUser}/>
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
