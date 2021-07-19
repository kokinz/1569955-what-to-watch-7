import {NameSpace} from '../root-reducer';

const getReviews = (state) => state[NameSpace.REVIEWS_DATA].reviews;

export {getReviews};
