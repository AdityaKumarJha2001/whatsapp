import { MoreVert } from '@material-ui/icons'
import { useState, useContext } from 'react'
import { Menu, MenuItem, makeStyles } from '@material-ui/core'
import { GoogleLogout } from 'react-google-login'
import { clientId } from '../../constants/data'
import { AccountContext } from '../../context/AccountProvider'

// component
import InfoDrawer from '../drawer/InfoDrawer'


const useStyles = makeStyles({
  menuItem: {
    fontSize: 14.5,
    padding: '15px 58px 5px 24px',
    color: '#3b4a54'
  },
  logout: {
    border: 'none!important',
    boxShadow: 'none!important',
    
  }
})

const HeaderMenu = () => {
  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const {setAccount} = useContext(AccountContext) 
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const onLogoutSuccess = () => {
    alert("You have been successfully logged out");
    console.clear();   // good practice to clear console after log out
    setAccount('')
  }

  const toggleDrawer = () => {
    setOpenDrawer(true)
  }

  return (
    <>
      <MoreVert onClick={handleClick}/>
      <Menu
        anchorEl={open}  //justify to open or close
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{ 
          horizontal: 'right'
        }}
      >
        <MenuItem className={classes.menuItem} onClick={() => {handleClose(); toggleDrawer()}}>Profile</MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            className={classes.logout}
          >
          </GoogleLogout>
        </MenuItem>
      </Menu>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default HeaderMenu;