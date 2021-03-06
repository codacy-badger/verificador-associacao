import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  background: {
    alignSelf: 'center',
    height: '100%',
    display: 'flex',
    backgroundImage: 'linear-gradient(to bottom right, white, white, rgb(242,186,0.1), rgba(217,147,5,1))',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  error: {
    fill: theme.palette.secondary.main,
    paddingBottom: '4px',
  },
  errorContainer: {
    margin: 0,
    justifyContent: 'center',
    display: 'flex',
    color: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  GoogleLogin: {
    backgroundColor: '#ea4335', // TODO: add this to constant file
    '&:hover': {
      backgroundColor: '#ea4335',
    },
  },
}));

const styles = {
  logo: (image) => ({
    background: `url(${image}) no-repeat center center`,
    height: '470px',
    width: '100%',
    backgroundSize: 'contain',
    alignSelf: 'center',
  }),
};

export {
  useStyles,
  styles,
};
