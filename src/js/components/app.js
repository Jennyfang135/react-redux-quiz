import React from 'react';

import Question from '../containers/question-container';

const App = () => (
  <div className="wrapper">
    <h1 className="title">Capital Cities Quiz</h1>
    <div className="main">
      This is the main section.
      <Question />
    </div>
    <footer className="footer">
      Coded by <a href="https://github.com/matt2112" target="_blank" rel="noreferrer noopener">Matt Lewis</a>
    </footer>
  </div>
);

export default App;
