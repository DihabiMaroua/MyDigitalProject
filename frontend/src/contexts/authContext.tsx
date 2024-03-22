import React, { createContext, useContext, useEffect, useReducer, PropsWithChildren } from 'react';
import { loginApi } from '../services/api';

type AuthContextType = {
  state: AuthState;
  login: (credentials: FormData) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

enum ActionTypes {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  RESET = 'RESET'
}

type User = {
  id: string;
  username: string;
  email: string;
  // Ajoutez d'autres propriétés spécifiques à l'utilisateur si nécessaire
};

type LoginResponse = {
  user: User;
  jwt: string;
};

type AuthState = {
  jwt: string | null;
  user: User | null;
  loading: boolean;
  error: Error | null;
};

const initialState: AuthState = {
  jwt: null,
  user: null,
  loading: false,
  error: null
};

type AuthAction<T extends ActionTypes> =
  | { type: T; payload: { jwt: string; user: User } }
  | { type: T; payload: { error: Error } }
  | { type: T }
  | { type: T; payload: null };

  const authReducer = <T extends ActionTypes>(prevState: AuthState, action: AuthAction<T> & { type: T }): AuthState => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        if ('payload' in action && action.payload !== null && 'jwt' in action.payload && 'user' in action.payload) {
          const { jwt, user } = action.payload;
          return {
            jwt,
            user,
            loading: false,
            error: null
          };
        }
        break;
      case ActionTypes.ERROR:
        if ('payload' in action && action.payload !== null && 'error' in action.payload) {
          const { error } = action.payload;
          return {
            jwt: null,
            user: null,
            loading: false,
            error
          };
        }
        break;
      case ActionTypes.LOADING:
        return {
          ...prevState,
          loading: true
        };
      case ActionTypes.RESET:
      case ActionTypes.LOGOUT:
        return initialState;
      default:
        throw new Error(`Unhandled action type : ${action.type}`);
    }
    return prevState;
  };  

const authFactory = (dispatch: React.Dispatch<AuthAction<ActionTypes>>) => ({
  login: async (credentials: FormData) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const result = await loginApi(credentials);
      const typedResult = result as LoginResponse;
      dispatch({
        type: ActionTypes.LOGIN,
        payload: {
          user: typedResult.user,
          jwt: typedResult.jwt
        }
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: {
          error: error as Error
        }
      });
    }
  },
  logout: () => {
    dispatch({ type: ActionTypes.LOGOUT });
  }
});

const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const savedState = window.localStorage.getItem('AUTH');
  const _initialState = savedState ? JSON.parse(savedState) : initialState;

  const [state, dispatch] = useReducer(authReducer, _initialState);

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, ...authFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside an <AuthProvider>');
  return context;
};

export {
  AuthProvider,
  useAuth
};
