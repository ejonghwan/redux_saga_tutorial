import { createStore, applyMiddleware, compose } from 'redux'; //compose 추가
import reducer from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension'; //추가
//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


const createSaga = createSagaMiddleware();
const middleware = [createSaga] // 추가
const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middleware)) : composeWithDevTools(applyMiddleware(...middleware)) //추가


const store = createStore(reducer, enhancer) // 수정
createSaga.run(rootSaga)

export default store;
