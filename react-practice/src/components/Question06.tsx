import Greeting from "./basic/Greeting";

function Question06() {
    const names = ["山田","鈴木","佐藤"];
    return(
        <div>
            {names.map((name,index) => (
               <Greeting key={index} name={name}/>
            ))}
        </div>
    )
}

export  default Question06;