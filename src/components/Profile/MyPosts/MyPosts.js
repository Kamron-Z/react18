import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)

    let text;

    let changePost = (e) => {
        text = e.target.value
    }

    let addPost = () => {
        props.addNewPost(text)
    }

    return (
        <div>
            <div>
                <div><input onChange={changePost} type="text"/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;