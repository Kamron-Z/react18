import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changePostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                changePostText={props.changePostText}
                addNewPost={props.addNewPost}/>
        </div>
    );

}

export default Profile;