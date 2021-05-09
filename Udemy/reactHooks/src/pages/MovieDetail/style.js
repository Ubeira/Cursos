import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexWrap: 'wrap',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: '2rem',
    fontFamily: 'Itim, cursive',
    textDecoration: 'underline',
    textDecorationColor: 'rgba(165, 42, 42, 0.5)',
    textDecorationStyle: 'wavy',
    marginBottom: 5,
  },
  infoGrid: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '60vh',
  },
  posterGrid: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    borderRadius: 20,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loading: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
});
