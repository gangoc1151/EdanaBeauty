import actions from './actions'
const initState = {
    user: null,
    items: [],
    service:null,
    count: 0,
    isFetching: false
}


const bookingReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_BOOKING_ITEM:
        case actions.ADD_BOOKING_ITEM_SUCCESS:
            return {...state, 
                    user: action.user,
                    count: action.count,
                    items : action.data,
                    isFetching: false}
        case actions.SET_SERVICE:
        case actions.SET_SERVICE_SUCCESS:
            return {
                ...state,
                count: action.numberPeople,
                service: action.Service
            }
        default:
            return state
    }
}
export default bookingReducer