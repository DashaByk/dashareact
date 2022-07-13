import {useEffect, useState} from "react";
import {getComments} from "../../services/Service";

import CommentComponent from "./CommentComponent";

function CommentsComponent() {

    let [comments, setComments] = useState([]);
    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(value=> <CommentComponent item={value} key={value.id}/>)
            }

        </div>
    );
}

export default CommentsComponent;