import React, { Fragment, Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

export default class extends Component {
state = {
    open: false
}

handleToggle = () => {
    this.setState({
        open: !this.state.open
    })
}

    render() {
        const { open } = this.state

        return (
            <Fragment>
                <Button variant="fab" onClick={this.handleToggle} mini>
                <AddIcon/>
                </Button>
                <Dialog
                open={open}
                onClose={this.handleToggle}
                >
                    <DialogTitle id="form-dialog-title">
                        Create a New Exercise
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary">
                        Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
    