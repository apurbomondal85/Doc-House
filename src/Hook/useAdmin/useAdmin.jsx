
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios';
import { useState } from 'react';

function useAdmin() {
    const { user, token } = useContext(AuthContext)
    const [admin, setAdmin] = useState();
    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: "get",
                headers: { "authorization": `berrer ${token}` },
                url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/users/${user?.email}`
            })
                .then(data => {
                    const [isAdmin] = data.data.filter(item => item?.email === user?.email);
                    setAdmin(isAdmin.role);
                })
        }
    }, [token])
    return [admin]
}

export default useAdmin
