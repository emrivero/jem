import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  card: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 24,
    width: 24,
  },
  hidden: {
    visibility: 'hidden',
  },
}));

export default useStyles;
