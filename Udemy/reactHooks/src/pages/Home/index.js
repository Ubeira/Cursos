import React, { useState } from 'react';
import {
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import styles from './styles';
import { TheatersIcon } from '../../icons';

export default ({ history }) => {
  const [searchText, setSearchText] = useState('');
  const classes = styles();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClean = (e) => {
    setSearchText('');
  };
  const handleSearch = (e) => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.tittleGridContainer}>
          <Grid>
            <Typography className={classes.title}> LoveFilms!</Typography>
          </Grid>
          <Grid>
            <TheatersIcon className={classes.theatersIcon} />
          </Grid>
          <TextField
            value={searchText}
            placeholder="Buscar..."
            onChange={handleChange}
            className={classes.textFieldSearch}
          />
          <Grid>
            <Button variant="contained" onClick={handleClean}>
              Borrar
            </Button>
            <Button
              variant="contained"
              onClick={handleSearch}
              size="large"
              className={classes.searchButton}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
