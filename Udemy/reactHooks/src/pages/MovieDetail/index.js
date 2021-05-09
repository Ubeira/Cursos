import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React, { useEffect } from 'react';
//useDispatch permite disparar acciones
//useSelector permite obtener el resultado
import { useDispatch, useSelector } from 'react-redux';
import { movieResult as movieResultSelector } from '../../redux/selector';
import { searchMovieById } from '../../redux/actions/search';
import style from './style';
import miniStyle from './miniStyle';

//Parámetro que viene como propiedad en los componentes que son los descendientes de una ruta
//match

export default ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));
  let classes;

  useMediaQuery('(min-width:600px)')
    ? (classes = style())
    : (classes = miniStyle());
  useEffect(() => {
    const movieId = match.params.id;
    if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
      dispatch(searchMovieById({ movieId }));
    }
  });

  if (!movieResult) {
    return (
      <Container className={classes.loadingContainer}>
        <CircularProgress size={300} className={classes.loading} />
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        {movieResult.Title}
      </Typography>
      <Grid className={classes.posterGrid}>
        <img
          src={movieResult.Poster}
          alt={movieResult.Title}
          className={classes.image}
        />
        <Grid className={classes.infoGrid}>
          <Typography>
            <strong>Actores:</strong> {movieResult.Actors}
          </Typography>
          <Typography>
            <strong>director: </strong>
            {movieResult.Director}
          </Typography>
          <Typography>
            <strong>Pais:</strong> {movieResult.Country}
          </Typography>
          <Typography>
            <strong>Clasificación:</strong> {movieResult.Rated}
          </Typography>
          <Typography>
            <strong>Premios: </strong>
            {movieResult.Awards}
          </Typography>
          <Typography>
            <strong>Sinopsis:</strong> {movieResult.Plot}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
