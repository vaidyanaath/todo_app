import {
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  checkbox: {
    "&$checked": {
      color: "#F5B369",
    },
  },
  checked: {},
  grid: {
    paddingTop: "10vh",
  },
  list: {
    width: "30vw",
  },
}));

const TodoList: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      //   justify="center"
      //   alignItems="center"
      //   className={classes.grid}
    >
      {/* <Typography variant="h5" component="div" gutterBottom>
        <Typewriter
          options={{
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString("Here's a slightly nicer list.")
              .start();
          }}
        />
      </Typography> */}

      <br />

      <Paper elevation={3}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                classes={{
                  root: classes.checkbox,
                  checked: classes.checked,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Frontend" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                classes={{
                  root: classes.checkbox,
                  checked: classes.checked,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Backend" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                classes={{
                  root: classes.checkbox,
                  checked: classes.checked,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Relational Database" />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

export default TodoList;
