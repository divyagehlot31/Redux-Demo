import React, { useState } from 'react';

import FastCounter from './components/FastCounter';
import SlowCounter from './components/SlowCounter';

function App() {
  const [mode, setMode] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>Sum of Squares</h1>
      <button onClick={() => setMode('fast')} style={{ marginRight: 10 }}>
        Show Fast Component 
      </button>
      <button onClick={() => setMode('slow')}>
        Show Slow Component 
      </button>

      <div style={{ marginTop: 20 }}>
        {mode === 'fast' && <FastCounter/>}
        {mode === 'slow' && <SlowCounter />}
        {!mode && <p>Click a button to show component</p>}
      </div>
    </div>
  );
}

export default App;
