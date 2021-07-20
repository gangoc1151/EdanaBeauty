import { combineReducers, createStore, applyMiddleware } from "redux";
import { put, takeLatest, takeEvery, fork, all, spawn } from 'redux-saga/effects'
import authSaga from '../userAuth/sagas'
import authReducer from "../userAuth/Reducer";
import bookingReducer from "../../../public/ScreenViews/BookingScreens/redux/reducer";
import createSagaMiddleware from 'redux-saga';
import bookingSaga from "../../../public/ScreenViews/BookingScreens/redux/sagas";

    const Store = combineReducers({
            auth: authReducer,
            booking: bookingReducer
        })
    



function* rootSaga(getState) {
    yield all([
        authSaga(),
        bookingSaga(),
        
      ]);
  }
const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(Store,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    // let persistor = persistStore(store)
    return {store}
  }