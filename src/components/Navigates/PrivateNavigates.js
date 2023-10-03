import {Navigate} from "react-router-dom"

import {getAuthToken} from "../../localStorage.js";

const PrivateNavigates = ({children}) => {
    const auth = getAuthToken()
  return auth ? children : <Navigate to='/login'></Navigate>
}

export default PrivateNavigates
