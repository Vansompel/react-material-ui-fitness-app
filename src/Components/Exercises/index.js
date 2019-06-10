import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Form from './Form'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: 20,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  firstItem: {
    [theme.breakpoints.down('xs')]: {
      height: '60%'
    }
  },
  secondItem: {
    [theme.breakpoints.down('xs')]: {
      height: '40%'
    }
  }
})

export default withStyles(styles)(
  ({
    classes,
    muscles,
    exercises,
    category,
    editMode,
    onSelect,
    exercise,
    exercise: {
      id,
      title = 'Welcome!',
      description = 'Please select an exercise from the list on the left.'
    },
    onDelete,
    onSelectEdit,
    onEdit
  }) =>
  <Grid container className={classes.container}>
    <Grid item className={classes.firstItem} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
              <Typography
                color='primary'
                variant='headline'
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) =>
                  <ListItem
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton color="primary" onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="primary" onClick={() => onDelete(id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.secondItem} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {editMode
          ? <Form 
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          : <Fragment>
              <Typography
                color='primary'
                variant="display1"
              >
                {title}
              </Typography>
              <Typography
                variant="subheading"
                style={{ marginTop: 20 }}
              >
                {description}
              </Typography>
            </Fragment>
        }
      </Paper>
    </Grid>
  </Grid>
)