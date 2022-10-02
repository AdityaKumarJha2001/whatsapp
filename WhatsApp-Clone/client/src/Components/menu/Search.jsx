import { Box, makeStyles, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  component: {
    height: 49,
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
  },
  search: {
    background: '#f0f2f5',
    position: 'relative',
    height: 35,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
    margin: '0 14px 0 12px',
    width: '100%',
  },
  searchIcon: {
    color: '#919191',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    paddingLeft: 12,
    alignItems: 'center',
  },
  inputRoot: {
    width: '100%',
  },
  inputInput: {
    color: '#3b4a54',
    fontSize: 15,
    height: 20,
    paddingLeft: 65,
    width: '100%',
  }
}))

const Search = ({ setText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon fontSize="small"/>
        </Box>
        <InputBase
          placeholder="Search or start new chat"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }} onChange={(e) => setText(e.target.value)}
        />
      </Box>
    </Box>
  )
}

export default Search;