import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                background
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );

}

export default Profile;