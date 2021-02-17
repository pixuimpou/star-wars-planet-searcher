export default props => {
    console.log(props.loadind)
    if (props.loadind) {
        return (
            <>
                <p>a</p>
            </>
        )
    }

    return (
        <>
        <p>b</p>
        </>
    )
    
}