
export const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>{props.title}</h3>
            {props.children}
        </form>
    )
}