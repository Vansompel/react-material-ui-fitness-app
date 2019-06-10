import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CreateDialog from '../Exercises/Dialog'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(
  ({ classes, muscles, onExerciseCreate }) =>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" className={classes.flex}>
            Fitness Database
          </Typography>
          <CreateDialog 
            muscles={muscles}
            onCreate={onExerciseCreate}
          />
        </Toolbar>
    </AppBar>
)