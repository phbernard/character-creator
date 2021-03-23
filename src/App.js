import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div class="global-background" />
      <div>
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
