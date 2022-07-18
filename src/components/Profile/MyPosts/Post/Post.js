import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.img}>img</div>
            <div>
                <div>{props.message}</div>
                <div>{props.likeCount}</div>
            </div>
        </div>
    );
}

export default Post;