type ButtonProps = {
    size?: "small" | "medium" | "large";
    color?: string;
    text?: string;
}

export default function Button({ size = "medium", color = "blue", text = "Click me" }: ButtonProps) {
    const buttonStyle = {
        padding:
            size === "small" ? "5px 10px"
                : size === "large" ? "15px 30px" : "10px 20px",
        backgroundColor: "blue",
        color: "red",
        border: "none",
        borderRadius: "4px",
        cursol: "pointer"
    };

    return (
        <button style={buttonStyle}>{text}</button>
    );
}
