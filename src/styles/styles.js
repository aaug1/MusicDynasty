import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    width: 345,
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main
  }
}))

export default useStyles;