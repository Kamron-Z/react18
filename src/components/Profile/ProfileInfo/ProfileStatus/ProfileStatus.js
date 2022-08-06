import React, {useEffect, useState} from 'react'
import {updateStatus} from "../../../../redux/profile-reducer";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStateStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <div><img src={props.profile.photos.small} alt=""/></div>
            <div>{props.profile.fullName}</div>
            <div>
                {!editMode &&
                    <div><span onDoubleClick={activeEditMode}>{status || 'not status'}</span></div>
                }
                {editMode &&
                    <div><input autoFocus={true} onChange={onChangeStateStatus} onBlur={deActiveEditMode}
                                type="text"
                                value={status}/></div>
                }
            </div>
        </div>

    );

}

export default ProfileStatus;