import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
//component
import { clientId } from '../../constants/data.js'
import { addUser } from '../../services/api.js';


const style = {
  dialogPaper: {      // to override the default paper class provided by material ui for dialog
    height: '95%',
    width: '70%',
    marginTop: '14%',
    boxShadow: 'none',
    borderRadius: 0,
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
    // padding: '64px 60px 110px'
  }
}

const useStyles = makeStyles({
  component: {
    display: 'flex'
  },
  leftComponent: {
    padding: '62px 0 63px 58px'
  },
  qrCode: {
    height: 280,
    width: 280,
    padding: '61px 0 0 61px'
  },
  checkBox: {
    display: 'flex',
    fontSize: 14,
    marginLeft: '36%',
    color: '#9C9C9C',
    marginTop: '4%'
  },
  title: {
    fontSize: 28,
    marginBottom: 25,
    color: '#41525d',
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
    fontWeight: 300
  },
  list: {
    marginBottom: "17%",
    '& > *': {
      fontSize: 18,
      padding: 0,
      marginTop: 16,
      lineHeight: '29px',
      color: '#4a4a4a'
    }
  },
  link: {
    fontSize: 14,
    lineHeight: 1,
    textDecoration: 'none',
    color: '#008069'
  }
})

const Login = ({ classes }) => {
  const classname = useStyles();
  const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
  
  const {setAccount} = useContext(AccountContext)

  const onLoginSuccess = async (res) => {
    // console.log(res);
    console.log("login successful", res.profileObj)
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  }

  const onLoginFailure = () => {
    alert("Login failed")
  }

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: 'unset' } }}  // changing or unsetting style(color) of backdrop class using BackdropProps

    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
          <List className={classname.list}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </List>
          <a href="/#" rel="noopener noreferrer" target="_blank" className={classname.link}
          >Need help to get started?</a>
        </Box>
        <Box style={{ position: 'relative' }}>
          <img src={qrurl} alt="qr" className={classname.qrCode} />
          <Box style={{ position: 'absolute', left: '50%', top: '41%'}}>
          <GoogleLogin
            clientId={clientId}
            buttonText=""
            isSignedIn={true}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
          />
          </Box>
          <label className={classname.checkBox} >
            <input type="checkbox" name="rememberMe" defaultChecked />
           Keep me signed in</label>
        </Box>
      </Box>
    </Dialog>
  )
}

export default withStyles(style)(Login);