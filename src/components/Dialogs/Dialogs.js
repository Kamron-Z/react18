import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} key={m.id}/>)

    let text;

    const changeMessage = (e) => {
        text = e.target.value
    }

    let addMessage = () => {
        props.addNewMessage(text)
        console.log(props.state.messages)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div><input onChange={changeMessage} type="text"/></div>
                    <div>
                        <button onClick={addMessage}>add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;