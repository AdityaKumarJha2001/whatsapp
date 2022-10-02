import { Box, Drawer, Typography, makeStyles } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';

// components
import Profile from './Profile';

const useStyles = makeStyles({
  header: {
   height: '108px',
   backgroundColor: '#008069',
   color: '#fff',
   display: 'flex',
   '& > *': {
     marginTop: 'auto',
     padding: '15px 20px 17px 23px',
   },
   '& :last-child': {
    fontSize: 19,
    fontWeight: 500,
    paddingLeft: 9,
   }
  },
  component: {
    background: '#ededed',
    height: '85%'
  }
})

const InfoDrawer = ({ open, setOpen }) => {
   
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  }
  
  return (
    <Drawer open={open} onClose={handleClose}>
    <Box className={classes.header}>
      <ArrowBack onClick={() => handleClose()}></ArrowBack>
      <Typography>Profile</Typography>
    </Box>
    <Box className={classes.component}>
      <Profile/>
    </Box>
    </Drawer>
  )
}

export default InfoDrawer;