import {NameSpace} from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER_DATA].authorizationStatus;

export {getAuthorizationStatus};
