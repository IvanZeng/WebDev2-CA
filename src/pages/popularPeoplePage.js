import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPopularPeople} from '../api/tmdb-api'


const PopularPeoplePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('people', getPopularPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;

  

  return (
    <PageTemplate
      title="Popular Actors"
      people={people}
    
    />    
  );
};

export default PopularPeoplePage;