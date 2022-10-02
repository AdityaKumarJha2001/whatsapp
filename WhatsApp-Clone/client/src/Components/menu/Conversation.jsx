import { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core'

import { AccountContext } from '../../context/AccountProvider';
import { UserContext } from '../../context/UserProvider';
import { setConversation } from '../../services/api'

const useStyles = makeStyles({
  component: {
    display: 'flex',
    height: 40,
    padding: '13px 0',
    cursor: 'pointer'
  },  
  displayImage: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px'
  },

})

const Conversation = ({ user }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);
  
  const setChat = async () => {
    setPerson(user);
    await setConversation({ senderId: account.googleId, receiverId: user.googleId});
  }

  return (
    <Box className={classes.component} onClick={() => setChat()}>
      <Box>
        <img src={user.imageUrl} alt="Dp" className={classes.displayImage}/>
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Conversation;