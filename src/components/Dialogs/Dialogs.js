import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Ahmad'},
        {id: 2, name: 'Damir'},
        {id: 3, name: 'Karim'}
    ]
    let messages = [
        {id: 1, message: 'Lorem ipsum dolor.'},
        {id: 2, message: 'Lorem ipsum dolor.'},
        {id: 3, message: 'Lorem ipsum dolor.'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = messages.map(m => <MessageItem message={m.message} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;