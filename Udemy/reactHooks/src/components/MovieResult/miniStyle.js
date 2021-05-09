import { makeStyles } from '@material-ui/styles';
const wid = 250;
export default makeStyles({
  cardContainer: {
    marginTop: 8,
    boxShadow: '2px 1px 8px white',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  gridContainer: {
    marginTop: 8,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: wid,
    borderRadius: 20,
  },
  titlesContainer: {
    paddingLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Itim, cursive',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  seeMore: { width: wid, backgroundColor: 'rgba(165, 42, 42, 0.5)' },
});
