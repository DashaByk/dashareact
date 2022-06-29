function Character(props) {
    let {name,text, image, alt}=props;

    return (
        <div>
            <h2>{name}</h2>
            <p>{text}</p>
            <img src={image} alt={alt}/>
        </div>
    )
}
export default Character;