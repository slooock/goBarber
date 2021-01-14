import { createContext } from 'react';
import { create } from 'yup/lib/Reference';

interface AuthContextData{
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData );

export default AuthContext;
