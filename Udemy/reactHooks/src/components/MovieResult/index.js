import { Button, Card, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import miniStyle from './miniStyle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const handleSeeMore = () => {
    history.push(`/movie/${imdbID}`);
  };
  let classes;

  useMediaQuery('(min-width:600px)')
    ? (classes = style())
    : (classes = miniStyle());
  return (
    <Card className={classes.cardContainer}>
      <Grid container className={classes.gridContainer}>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography className={classes.title}>
            <strong>{Title}</strong>
          </Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button
            variant="contained"
            onClick={handleSeeMore}
            className={classes.seeMore}
          >
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
//El withRouter, me permite obtener el history por props de un export default!!!
export default withRouter(MovieResult);
