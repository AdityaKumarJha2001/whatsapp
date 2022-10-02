import {AppBar, Toolbar, makeStyles, Box} from '@material-ui/core';
import { useContext } from 'react';

import { AccountContext } from '../context/AccountProvider';

//components
import Login  from './account/Login';
import ChatBox from './ChatBox.jsx'

const useStyles = makeStyles({
  loginHeader: {
    height: 200,
    background: '#5bab85',
    // background: '#63ad8b',
    boxShadow: 'none'
  },
  component: {
    background: '#DCDCDC',
    height: '100vh'
  }
})

const Messenger = () => {
  const classes = useStyles();
  
  const { account } = useContext(AccountContext)
  
  return (
    <>
    { account ? <ChatBox/>
      : 
    <Box className={classes.component}>
    <AppBar className={classes.loginHeader}>
      <Toolbar>
      </Toolbar>
    </AppBar>
    <Login/> 
    </Box> 
    }
    </>
  )
}

export default Messenger;