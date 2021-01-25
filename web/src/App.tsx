import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/signin';
// import SignUp from './pages/SignUp';
import AppProvider  from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn/>
    </AppProvider>
    <GlobalStyle/>
  </>
)
export default App;
