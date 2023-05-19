import React, { useState } from 'react'
import { Search } from '../components/seach'
import {Error} from '../components/error'
import { UserProps } from '../types/user'
import User from '../components/user'

export const Home = () => {
    

    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)



    const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()

        console.log(data);
        setError(false)
        setUser(null)

        if(res.status === 404){
            setError(true)
            return 
        }

        const { 
            avatar_url,
            login,
            location,
            followers,
            following 
        } = data

            const userData : UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following
            }

            setUser(userData)
    }

    return (
        <div>

            <Search loadUser={loadUser} />
            {user && <User {...user}/>}
            {error && <Error/>}
        </div>

    )
}
