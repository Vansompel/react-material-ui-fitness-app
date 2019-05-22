import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CreateDialog from '../Exercises/Dialogs/Create'

export default props =>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            Fitness Database
          </Typography>
          <CreateDialog/>
        </Toolbar>
    </AppBar>