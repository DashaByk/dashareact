function PostComponent({item}) {
    return (
        <div>
            <h3>{item.id}</h3>
            <p>{item.body}</p>
            <p>{item.title}</p>
        </div>
    );
}

export default PostComponent;