import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import AddMessageForm from "../../Form/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <AddMessageForm addMessageApi={props.addMessageApi}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;