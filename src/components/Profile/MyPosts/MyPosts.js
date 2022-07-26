import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)

    let text;

    let changePost = (e) => {
        text = e.target.value
        props.changePostText(text)
    }

    let addPost = () => {
        props.addNewPost()
    }

    return (
        <div>
            <div>
                <div><input onChange={changePost} type="text" value={props.newPostText}/></div>
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