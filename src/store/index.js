import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
const createSaga = createSagaMiddleware();



const store = createStore(reducer, applyMiddleware(createSaga))
createSaga.run(rootSaga)

export default store;
