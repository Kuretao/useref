

export const InputDefault = ({type, ref, onKeyDown, onChange, placeholder}) =>{
    return (
        <>
            <input placeholder={placeholder} type={type} onChange={onChange} ref={ref} onKeyDown={onKeyDown}/>
        </>
    )
}

export const InputCheckbox = ({text}) =>{
    return (
        <label>
            <input type="checkbox"/>
            {text}
        </label>
    )
}