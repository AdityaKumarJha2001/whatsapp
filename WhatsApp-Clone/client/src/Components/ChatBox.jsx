import { Box, makeStyles } from '@material-ui/core';
import { useContext } from 'react';

import { UserContext } from '../context/UserProvider';
import Chat  from './chat/Chat';
import EmptyChat from './chat/EmptyChat';
import Menu from './menu/Menu.jsx'

const useStyles = makeStyles({
  component: {
   display: 'flex'
  },
  leftComponent: {
   // width: '55%',
   width: '35.5%',
   minWidth: 300,
    height: '100%'
  },
  rightComponent: {
   borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
   width: '64.5%',
   minWidth: 300,
   overflow: 'hidden'
  }
})

const ChatBox = () => {
  const classes = useStyles();
  
  const { person } = useContext(UserContext);

  return (
    <Box className={classes.component}>
      <Box className={classes.leftComponent}>
      <Menu/>
      </Box> 
      <Box className={classes.rightComponent}>
        { 
        Object.keys(person).length ?  <Chat/> : <EmptyChat/>
        }
      </Box>
    </Box>
  )
}

export default ChatBox;