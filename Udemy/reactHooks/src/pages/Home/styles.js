import { makeStyles } from '@material-ui/core';

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default makeStyles({
  container: {
    height: '100vh',
    ...centeredStyleObj,
    flexDirection: 'column',
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem',
    ...centeredStyleObj,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  title: {
    fontSize: '4rem',
    fontFamily: 'Itim, cursive',
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: '90%',
  },
  searchButton: {
    margin: '.5rem',
    backgroundColor: 'rgba(165, 42, 42, 0.5)',
  },
  buttonsContainer: {
    marginTop: '0.5rem',
  },
  theatersIcon: {
    fontSize: '4rem',
  },
});
