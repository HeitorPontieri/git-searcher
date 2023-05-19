type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}


import React, { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import css from "./search.module.css"



export const Search = ({loadUser}: SearchProps) => {

    const [userName, setuserName] = useState("")

    const handleKeyDown = (e : KeyboardEvent) =>{
        if(e.key ==  "Enter"){
            loadUser(userName)
        }
    }

    return (
        <div className={css.searchcontainer}>
            <div>
                <h2>Busque por um usuário</h2>
                <p>Conheça seus melhores repositórios</p>
            </div>
            <div className={css.searchbar}>
                <input 
                    type="text" 
                    placeholder='Digite o nome do usuário' 
                    onChange={(e) => setuserName(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch /> 
                </button>
            </div>
        </div>
    )
}
