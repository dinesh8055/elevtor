import * as t from './actionTypes'
import * as constants from './constants'
import Firebase from 'firebase'

const ref = new Firebase(constants.FB_ENDPOINT)

export const login = (userData) => {
  return (dispatch) => {
    const authData = ref.getAuth()
    if (authData !== null) {
      return Promise.resolve(dispatch({
        type: t.LOGIN,
        user: authData
      }))
    } else if (userData) {
      return ref.authWithPassword(userData).then((authData) => {
        return dispatch({
          type: t.LOGIN,
          user: authData
        })
      }, (error) => {
        throw new Error(`Error logging in: ${error.message}`)
      })
    } else {
      return Promise.reject(new Error('Login Failed!')).catch((error) => {
        dispatch({
          type: t.LOGOUT
        })
        throw error
      })
    }
  }
}
