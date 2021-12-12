import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
  });

  export default function PeopleCard({ people }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardHeader className={classes.header} title={people.name} />
          <CardMedia
            className={classes.media}
            image={
              people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                : img
            }
          />

          <CardContent>
           <Grid container>
            <Grid item xs={6}>
             <Typography variant="h6" component="p">
               <StarRateIcon fontSize="small" />
               {"  "} {people.popularity}{" "}
             </Typography>
            </Grid>
           </Grid>
           <Link to={`/people/${people.id}`}>
          <Button variant="outlined" size="medium" color="primary">
          More Informaiton
          </Button>
        </Link>

          </CardContent>
          <CardActions disableSpacing>
      </CardActions>
          </Card>
  );
}