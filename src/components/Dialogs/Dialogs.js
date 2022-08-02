import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} key={m.id}/>)

    const changeMessage = (e) => {
        let text = e.target.value
        props.updateMessage(text)
    }

    let addMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div><input onChange={changeMessage} type="text" value={props.state.updateMessageText}/></div>
                    <div>
                        <button onClick={addMessage}>add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;