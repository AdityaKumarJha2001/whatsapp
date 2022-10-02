import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { createContext } from 'react'

export const TemplateContext = createContext(null)

const theme = createTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        width: '35%',
        boxShadow: 'none'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'unset'
      }
    }
  }
})

const TemplateProvider = ({ children }) => {
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  )
}

export default TemplateProvider;