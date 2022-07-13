import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import TodosPage from "./pages/TodosPage";
import PostsCurrentComponent from "./components/posts/PostsCurrentComponent";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'album'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                <Route path={':postId'} element={<PostsCurrentComponent/>}/>
            </Route>
        </Route>
</Routes>

</div>
)
    ;
}


