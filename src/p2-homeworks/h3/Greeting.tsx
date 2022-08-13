import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    keyDownCallback: (e:KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, keyDownCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error  : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div className={s.inputError}>
                <input value={name} onChange={setNameCallback} onKeyDown={keyDownCallback} className={inputClass}/>
                <div className={error ? s.errorMessage : ''}>{error}</div>
            </div>
            <button className={s.item + ' ' + s.button} onClick={addUser}>add</button>
            <div className={s.totalUsers}>{totalUsers}</div>

        </div>
    )
}

export default Greeting
