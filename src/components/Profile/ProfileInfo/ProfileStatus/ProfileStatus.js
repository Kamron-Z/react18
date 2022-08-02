import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        console.log('this', this)
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (

            <div>
                <div><img src={this.props.profile.photos.small} alt=""/></div>
                <div>{this.props.profile.fullName}</div>
                <div>
                    {!this.state.editMode &&
                        <div><span onDoubleClick={this.activeEditMode}>{this.state.status}</span></div>
                    }
                    {this.state.editMode &&
                        <div><input autoFocus={true} onChange={this.onChangeStateStatus} onBlur={this.deActiveEditMode} type="text"
                                    value={this.state.status}/></div>
                    }
                </div>
            </div>

        );
    }
}

export default ProfileStatus;