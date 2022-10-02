import { Box, makeStyles, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
  imageContainer: {
   display: 'flex',
   justifyContent: 'center'
  },
  displayImage: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '29px 0'
  },
  nameContainer: {
    background: '#fff',
    padding: '11px 30px 10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
    '& :first-child': {
      fontSize: 14,
      color: '#008069'
    },
    '& :last-child': {
      fontSize: 17,
      color: '#3b4a54',
      margin: '16px 0 8px 0 '
    }
  },
  description: {
    margin: '13px 20px 28px 30px',
    '& > *': {
      fontSize: 14,
      color: '#8696a0',
      
    }
  }
})

const Profile = () => {

  const classes = useStyles();
  const { account } = useContext(AccountContext);

  return (
    <>
      <Box className={classes.imageContainer}>
        <img src={account.imageUrl}  className={classes.displayImage} alt="dp"/>
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
      </Box>
      <Box className={classes.nameContainer}>
      <Typography>About</Typography>
        <Typography>Eat! Code! Sleep! Repeat!</Typography>
      </Box>
    </>
  )
}

export default Profile;