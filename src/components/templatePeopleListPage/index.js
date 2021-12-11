import React, { useState } from "react";
import Header from "../headerPeopleList";
import FilterCard from "../filterPeopleCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peopleList";
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles({
    root: {
      padding: "20px",
    },
  });

  function PeopleListPageTemplate({ people, title, action }) {
    const classes = useStyles();
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);

    let displayedpeople = people
    .filter((p) => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((p) => {
      return genreId > 0 ? p.genre_ids.includes(genreId) : true;
    });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
      };

      return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Header title={title} />
    
          </Grid>
          <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
              <FilterCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
              />
            </Grid>
            <PeopleList action={action} people={displayedpeople}></PeopleList> 
          </Grid>
        </Grid>
      );
    }
    export default PeopleListPageTemplate;