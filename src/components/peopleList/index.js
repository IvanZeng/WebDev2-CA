import React from "react";
import People from "../peopleCard";
import Grid from "@material-ui/core/Grid";

const PeopleList = ( {people, action }) => {
  let peopleCards = people.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <People key={p.id} people={p} action={action} />
    </Grid>
  ));
  return peopleCards;
};

export default PeopleList;