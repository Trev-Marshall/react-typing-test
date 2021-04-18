import React from 'react';
import { Preview } from './components/Preview';
import { UserInput } from './components/UserInput';
import { SpeedInfo } from './components/SpeedInfo';
import { ResetBtn } from './components/ResetBtn';

import { TypingProvider } from './state/context';

function App() {
  return (
    <div className='container'>
      <TypingProvider>
        <h1>Melange</h1>
        <Preview />
        <UserInput />
        <div className='typing-speed'>
          <SpeedInfo />
        </div>
        <ResetBtn />
      </TypingProvider>
    </div>
  );
}

export default App;
