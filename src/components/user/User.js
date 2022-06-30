
export default function User(user,elevate) {
    const onclick = ()=>{
elevate(user.id);
    }

    return (
        <div>
            {user.name}
            <button onClick={onclick}> show posts</button>
        </div>
    );
}

