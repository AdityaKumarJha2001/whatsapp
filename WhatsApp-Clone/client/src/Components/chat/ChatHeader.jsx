import { Box, Typography, makeStyles } from '@material-ui/core';
import { MoreVert, Search } from '@material-ui/icons';
import { useContext } from 'react';

import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
  component: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    padding: '10px 16px',
    background: '#f0f2f5'
  },
  dp: {
    height: 40,
    width: 40,
    borderRadius: '50%'
  },
  name: {
    marginLeft: 14
  },
  status: {
    marginLeft: 14,
    fontSize: 13,
    color: '#667781'
  },
  icons: {
    marginLeft: 'auto',

    '& > *': {
      padding: 8,
      fontSize: 24,
      color: '#54656f'
    }
  }
})

const ChatHeader = ({ person }) => {

  const classes = useStyles();
  const { activeUsers } = useContext(AccountContext);
  const url = person.imageUrl || 'https://static.straitstimes.com.sg/s3fs-public/articles/2020/12/01/af_moneyheist_011220.jpg';
  return (
    <Box className={classes.component}>
      <img src={url} alt="dP" className={classes.dp}/>
      <Box>
        <Typography className={classes.name}>{person.name}</Typography>
        <Typography className={classes.status}>
        {
          activeUsers?.find(user => user.userId === person.googleId ) ? 'Online' : 'Offline'
        }
        </Typography>
      </Box>
      <Box className={classes.icons}>
        <Search/>
       <MoreVert/>
      </Box>
    </Box>
  )
}

export default ChatHeader;