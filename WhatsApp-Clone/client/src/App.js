
// Componenets
import Messenger from './Components/Messenger.jsx'
import AccountProvider from './context/AccountProvider.jsx';
import UserProvider from './context/UserProvider.jsx';
import TemplateProvider from './theme/TemplateProvider.jsx';


function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
