import {useCallback, useEffect, useState} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    //const [ready, setReady] = useState(false)

    const login = useCallback((jwtToken, id) => {
        //посмотреть, как будет работать, после обернуть в useCallback
        setToken(jwtToken)
        setUserId(id)
        
        localStorage.setItem('userData', JSON.stringify({
            userId: id, token: jwtToken
        }))
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

    return {login, logout, token, userId}
}