import React from 'react'
import { MdLocationPin } from "react-icons/md"
import { UserProps } from '../types/user'
import { Link } from "react-router-dom"
import css from "./user.module.css"

export const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
    return (
        <div className={css.user_container}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p className={css.user_location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={css.user_follow}>
                <div >
                    <p>Seguidores:</p>
                    <p className={css.number}>{followers}</p>
                </div>
                <div >
                    <p>Seguindo:</p>
                    <p className={css.number}>{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </div>
    )
}

export default User
