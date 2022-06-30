import Users from "./components/users/Users";
import {getUserPost} from "./services/user.api.service";
import {useState} from "react";
import Posts from "./components/posts/Posts";

export default function App() {

    let [posts, setPosts] = useState([]);
    const elevate = (id) =>{
        getUserPost(id).then(({data})=>{
            setPosts([...data]);
        })
    }
  return (
    <div>

        <div className={'left'}><Users elevate={elevate}/></div>
        <div className={'right'}>
            <Posts posts={posts}/>
        </div>


    </div>
  );
}


