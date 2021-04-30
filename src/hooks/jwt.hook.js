import decode from 'jwt-decode'
import { useState } from 'react'

export const useJwt = () => {
    const [jwt, setJwt] = useState(null)
    const [role2, setRole] = useState(0)
 
    const token = JSON.parse(localStorage.userData).token
    if (token) { 
        setJwt(token)
        const jwtDecode = decode(token)
        setRole(jwtDecode.role)
    } 
    return {jwt, role2}

}