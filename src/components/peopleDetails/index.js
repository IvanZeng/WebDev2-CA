import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const PeopleDetails = ({ people }) => {  // Don't miss this!
  const classes = useStyles();
 

  return (
    <>
      <Typography variant="h5" component="h3">
        Actor Biography
      </Typography>

      <Typography variant="h6" component="p">
        {people.biography}
      </Typography>



      <Paper component="ul" className={classes.root}>
    
        <Chip
          icon={<fas fa-universal-access/>}
          label={`${people.name}`}
        />
        <Chip
          icon={<fas fa-home />}
          label={`${people.place_of_birth}`}
        />
         <Chip
          icon={<far fa-calendar-minus />}
          label={`${people.birthday}`}
        />
      </Paper>
      </>
  );
};
export default  PeopleDetails ;