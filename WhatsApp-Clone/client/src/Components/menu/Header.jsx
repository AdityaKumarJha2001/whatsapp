import { Box, makeStyles } from '@material-ui/core';
import { useContext, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import ChatIcon from '@material-ui/icons/Chat';

// component
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../drawer/InfoDrawer';


const useStyles = makeStyles({
  header: {
   height: 40,
   background: '#f0f2f5',
   padding: '10px 16px',
   display: 'flex',
   alignItems: 'center'
  },
  avatar: {
   height: 40,
   width: 40,
   borderRadius: '50%'
  },
  icons: {
   marginLeft: 'auto',
   '& > *': {
     marginLeft: 11,
     padding: 8,
     color: '#5E5E5E'
   },
   '& :first-child': {
     fontSize: 22
   }
  }
})

const Header = () => {
  const {account} = useContext(AccountContext)
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(true)
  }

  return (
    <>

    <Box className={classes.header}>
      <img src={account.imageUrl} onClick={toggleDrawer} alt="DP" className={classes.avatar} />
      <Box className={classes.icons}>
       <ChatIcon/>
       <HeaderMenu/>
      </Box>
    </Box>
    <InfoDrawer open={open} setOpen={setOpen} />

    </>
  )
}

export default Header;