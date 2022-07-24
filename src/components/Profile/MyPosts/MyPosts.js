import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hi, how are you', likeCount: 15},
        {id: 2, message: 'hi, what is up', likeCount: 10},
        {id: 3, message: 'hi, what is up', likeCount: 24},
        {id: 4, message: 'hi, what is up', likeCount: 24},
    ]

    let postsElements = posts.map( p =>  <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)

    return (
        <div>
            <div>
                <div><input type="text"/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;