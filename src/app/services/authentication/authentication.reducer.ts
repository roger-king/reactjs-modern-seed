import { ActionTypes} from './../actionTypes';
import { TypeKeys } from './../typeKeys';
import { Authentication } from './authentication';

const INITIAL_STATE: Authentication = {
    loggedIn: false
};

export default function (state: Authentication = INITIAL_STATE, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.AUTH_ISLOGGEDIN:
            return { loggedIn: action.loggedIn};
        case TypeKeys.AUTH_LOGIN:
            state.loggedIn = action.loggedIn;
            console.log('logged in', state.loggedIn);
            return { loggedIn: state.loggedIn };
        default:
          return state;
      }
}