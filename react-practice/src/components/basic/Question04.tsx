export default function StyleBox() {
    const boxStyle = {
        backgroundColor: "#f0f0f0",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "8px",
    };
    return (
        <div>
            <div style={boxStyle}>インラインスタイル</div>
            <div className="custom-box">良い感じです</div>
        </div>
    )
}