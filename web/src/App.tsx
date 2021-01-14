import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/signin';
// import SignUp from './pages/SignUp';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Kayque' }}>
      <SignIn/>
    </AuthContext.Provider>
    <GlobalStyle/>
  </>
)
export default App;
