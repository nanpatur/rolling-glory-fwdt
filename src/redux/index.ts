import { createStore, combineReducers } from 'redux';
import giftReducer from './reducers/gift.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IGiftReduxState } from './states/gift.state';

export interface IAppReduxState {
  gift: IGiftReduxState
}

const rootReducer = combineReducers<IAppReduxState>({
  gift: giftReducer
});

const middleware = composeWithDevTools();

export const store = createStore(rootReducer, middleware);
