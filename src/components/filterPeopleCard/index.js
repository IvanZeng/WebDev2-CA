import React from "react"; 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "rgb(155, 146, 134)",
    },
    media: { height: 300 },
  
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
      backgroundColor: "rgb(255, 255, 255)",
    },
  }));
  
  export default function FilterPeopleCard(props) {
    const classes = useStyles();
  
    const handleChange = (e, type, value) => {
      e.preventDefault()
      props.onUserInput(type,value)
    };
    const handleTextChange = e => {
      handleChange(e, "name", e.target.value)
    }
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the Actors.
          </Typography>
          <TextField
        className={classes.formControl}
        id="filled-search"
        label="Search field"
        type="search"
        value={props.titleFilter}
        variant="filled"
        onChange={handleTextChange}
      />

        </CardContent>
        <CardMedia
          className={classes.media}
          image={img}
          title="Filter"
        />
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the Actors.
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  }