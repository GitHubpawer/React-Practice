type GreetingProps = {
    name: string;
};

function Greeting(props:GreetingProps) {
    return(
        <>
        <div>こんにちは、{props.name}</div>
        <div>こんにちは、{props.name}</div>
        <div>こんにちは、{props.name}</div>
        </>
    )
}

export default Greeting;