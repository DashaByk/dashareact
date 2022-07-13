import CommentsComponent from "../components/comments/CommentsComponent";
import {Outlet} from "react-router-dom";

function CommentsPage() {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}

export default CommentsPage;