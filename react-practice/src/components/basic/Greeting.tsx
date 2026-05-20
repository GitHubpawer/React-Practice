type GreetingProps = {
    name: string;
};
function Greeting(props: { name: string }) {
    return (
        <>
            <h1>こんにちは{props.name}さん</h1>
        </>
    )
}