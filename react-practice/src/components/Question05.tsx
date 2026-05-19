export default function DynamicImage() {
    const ImageUrl = "https://placehold.co/150";
    const altText = "サンプル画像";
    const baseWidth = 150;
    const isLarge = true;


    return (
        <>
            <img
            src={ImageUrl}
            alt={altText}
            width={isLarge ? baseWidth * 2 : baseWidth}
            data-size={isLarge ? "large" : "small"}
            />
        </>

    )
}