import React from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App(): JSX.Element {
  const [auth, setAuth] = React.useState(false);

  const goHome = () => {
    setAuth(true);
  };

  const goExit = () => {
    setAuth(false);
  };

  return (
    auth ? <Home goExit={goExit} /> : <Login goHome={goHome} />
  );
}

export default App;
