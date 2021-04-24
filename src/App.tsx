import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import { Preview } from './components/Preview';
import { UserInput } from './components/UserInput';
import { SpeedInfo } from './components/SpeedInfo';
import { ResetBtn } from './components/ResetBtn';
import { TestBtn } from './components/TestBtn';
import User from './components/User';

// Context
import { TypingProvider } from './state/context';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/"><h1>Melange</h1></Link>
          </ul>
          <ul>
            <Link to="/user">Profile</Link>
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

      </Switch>
    </Router>
  );
}

export default App;
