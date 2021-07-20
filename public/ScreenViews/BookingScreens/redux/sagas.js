import { takeEvery, put, call, fork, take } from 'redux-saga/effects'
import actions from './actions'

export function* add_booking () {
    yield put({
        type: actions.ADD_BOOKING_ITEM_SUCCESS,
        // data: response
      });

    // console.log('test')
}

export function* setService ({numberPeople, Service}) {
  
  yield put ({
    type: actions.SET_SERVICE_SUCCESS,
    numberPeople,
    Service
    // data: response
  })

  // console.log(numberPeople, Service)
}

export default function* bookingSaga() {
    yield [
        yield takeEvery(actions.ADD_BOOKING_ITEM, add_booking),
        yield takeEvery(actions.SET_SERVICE, setService)
    ]
  }