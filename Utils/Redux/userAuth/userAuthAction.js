const actions = {
    LOGIN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    LOGIN_SUCCESSFULLY: 'LOGIN_SUCCESSFULLY',
    GET_USER: 'GET_USER',
    LOGIN_FAIL: 'LOGIN_FAIL',
    SIGN_UP_FAIL: 'SIGN_UP_FAIL',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    UNMOUNT_ERROR: 'UNMOUNT_ERROR',
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_PASSWORD_SUCCESS: 'UPDATE_PASSWORD_SUCCESS',
    KEEP_USERNAME_REGISTER: 'KEEP_USERNAME_REGISTER',
    KEEP_USERNAME: 'KEEP_USERNAME',
    RESET_ERROR: 'RESET_ERROR'
  }


export const login = (username, password) => {
    return {
      type: actions.LOGIN,
      username, password
    }
}
export const getUser = () => {
  return {
    type: actions.GET_USER
  }
}

export const keepUsername = (username) => {
  return {
    type: actions.KEEP_USERNAME_REGISTER,
    username
  }
}
export const logout = () => {
  
  return {
    type: actions.LOGOUT
  }
}
export const resetError = () => {
  return {
    type: actions.RESET_ERROR
  }
}
export const register = (email, name, phone, password, cpassword) => {
  return {
    type: actions.SIGN_UP,
  email, name, phone, password, cpassword
  }
}
export default actions