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
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
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
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
              <Typography
                variant="headline"
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
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
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
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {editMode
          ? <Form 
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          : <Fragment>
              <Typography
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