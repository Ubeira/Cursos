import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    margin: '1rem',
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
    paddingBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'start',
    gap: '1rem',
    maxWidth: '60vh',
    textIndent: '2rem',
    whiteSpace: 'pre-line',
  },

  posterGrid: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    borderRadius: 20,
    maxHeight: '75vh',
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
