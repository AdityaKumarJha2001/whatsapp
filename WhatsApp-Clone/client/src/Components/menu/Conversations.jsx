import { useEffect, useState, useContext } from 'react';
import { Box, makeStyles } from '@material-ui/core'

// component
import { getUsers } from '../../services/api';
import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
  component: {
    height: '84vh'
  }
})

const Conversations = ({ text }) => {

  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, [text])

  const fetchData = async () => {
    const data = await getUsers();
    const filterData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
    setUsers(filterData);
  }

  return (
    <Box className={classes.component}>
      {
        users.map((user, index) => (
          user.googleId !== account.googleId &&
          <Conversation user={user} key={index} />
        ))
      }
    </Box>
  )
}

export default Conversations;