import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <div><input type="text"/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <Post message='hi, how are you' likeCount='15'/>
                <Post message='hi, what is up' likeCount='35'/>
            </div>
        </div>
    );
}

export default MyPosts;