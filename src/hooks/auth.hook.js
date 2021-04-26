import {useCallback, useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    //const [ready, setReady] = useState(false)
    const [role, setRole] = useState(0)

    const login = useCallback((jwtToken) => {
        //посмотреть, как будет работать, после обернуть в useCallback
        setToken(jwtToken)
        
        const decoded = jwtDecode(jwtToken)
        setUserId(decoded.id)
        setRole(decoded.role)

        localStorage.setItem('userData', JSON.stringify({
            userId: decoded.id, token: jwtToken, role: decoded.role
        }))
        console.log("decoded: ", decoded)
        const checkTok=JSON.parse(localStorage.userData).token
        const checkId=JSON.parse(localStorage.userData).userId
        
        console.log("localStorage: ",  checkId, "jwt: ", checkTok)
    }, [])

    const logout = () => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token){
            login(data.token, data.userId)
        }
    }, [login])

    return {login, logout, token, userId, role}
}