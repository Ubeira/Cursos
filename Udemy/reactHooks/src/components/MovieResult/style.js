import { makeStyles } from '@material-ui/styles';
const wid = 150;
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
    flexWrap: 'nowrap',
  },
  poster: {
    width: wid,
    borderRadius: 20,
  },
  titlesContainer: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Itim, cursive',
    fontSize: '1.5rem',
  },
  seeMore: { width: wid, backgroundColor: 'rgba(165, 42, 42, 0.5)' },
});
