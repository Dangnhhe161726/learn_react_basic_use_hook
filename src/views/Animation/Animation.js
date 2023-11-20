export const Loading = (props) => {
    return (
        <>
            {
                props.loading === true &&
                <div className="loader"></div>
            }
        </>
    )
}

export const IsError = (props) => {
    return (
        <>
            {
                props.isError === true &&
                <h1 style={{ color: 'red' }}>Something wrong...</h1>
            }
        </>
    )
}