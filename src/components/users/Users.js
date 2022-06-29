import {useEffect, useState} from "react";

import {User} from "../user/User";
import {UserDetailes} from "../userDetails/UserDetailes";


function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    },[]);

    const userButton = (item) => {
setUser(item);
    }
    return (
        <div>
            {
            user && <UserDetailes
                user={user}
                />
        }
            {
                users.map(user => <User key={user.id}
                                        item={user}
                userButton={userButton}
                />)
            }
        </div>
    );
}

export {Users};