import actions from './userAuthAction'

const initState = {
    user: null,
    isFetching: false,
    isLogin: false,
    updating: false,
    registeruser:null,
    error: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE_PROFILE:
        case actions.UPDATE_PASSWORD:
            return {...state, updating: true}
        case actions.UPDATE_PROFILE_SUCCESS:
        case actions.UPDATE_PASSWORD_SUCCESS:
            return {...state, updating: false}
        case actions.LOGIN:
            return {...state, isFetching: false, error: null}
        case actions.KEEP_USERNAME_REGISTER:
        case actions.KEEP_USERNAME:
            return { ...state, error: null }
        case actions.SIGN_UP:
            return {...state,  isFetching: true, isLogin : false, error: null}
        case actions.LOGIN_SUCCESSFULLY:
            return {...state,  user: action.data, isFetching : false, isLogin : true};
        case actions.SIGN_UP_SUCCESS:
            return {...state,  isFetching : false, isLogin : false, error: null};
        case actions.LOGIN_FAIL:
        case actions.SIGN_UP_FAIL:
            return {...state,  isFetching: false, isLogin : false, error: action.data}
        case actions.LOGOUT_SUCCESS:
        return {...state,  user: null};
        case actions.UNMOUNT_ERROR:
            return { ...state,  isFetching : false};
        case actions.RESET_ERROR: 
            return {...state,  isFetching: true, isLogin : false, error: null}
        default:
        return state
    }
}
export default authReducer