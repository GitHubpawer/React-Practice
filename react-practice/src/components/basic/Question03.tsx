

function Introduction() {
    const name="田中";
    const age = 24;
    const curentYear = new Date().getFullYear();
    return(
        <>
        <div>私は{name}です{age}です.今年は{curentYear}です</div>
        </>
    )
}

export default Introduction;