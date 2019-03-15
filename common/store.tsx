import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { IUser, IPost, IComment } from '../data-models';

export interface IAppState {
  users: IUser[];
  posts: IPost[];
  comments: IComment[];
  post: IPost;
  viewer: any;
  isAuthenticated: boolean;
}

const INITIAL_STATE: IAppState = {
  users: [],
  posts: [],
  comments: [],
  post: undefined,
  viewer: undefined,
  isAuthenticated: false,
};

const mergeUpdatedKeys = (data: any, state: IAppState) => {
  return { ...state, ...data };
};

const mergeAuthState = (
  { isAuthenticated, viewer }: { isAuthenticated: boolean; viewer: any },
  state: IAppState
) => {
  return { ...state, isAuthenticated, viewer };
};

const mergeLogoutState = (state: IAppState) => {
  return { ...state, isAuthenticated: false, viewer: undefined };
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'UPDATE_STORE_KEYS':
      return mergeUpdatedKeys(action.data, state);
    case 'VIEWER_AUTHENTICATED':
      return mergeAuthState(action, state);
    case 'VIEWER_LOGOUT':
      return mergeLogoutState(state);
    default:
      return state;
  }
};

export const initStore = (initialState: IAppState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
