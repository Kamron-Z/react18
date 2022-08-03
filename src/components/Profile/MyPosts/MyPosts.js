import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "../../../Form/AddPostForm";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)

    return (
        <div>
            <AddPostForm addPostApi={props.addPostApi}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;

