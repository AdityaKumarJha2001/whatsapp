import { useContext, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { getConversation } from '../../services/api';

import { UserContext } from '../../context/UserProvider';
import { AccountContext } from '../../context/AccountProvider';
import ChatHeader from './ChatHeader';
import Messages from './Messages';



const Chat = () => {

  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ sender: account.googleId, receiver: person.googleId });
      setConversation(data);
    }
    getConversationDetails();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  )
}

export default Chat;