import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quest">
          <DetailedQuest />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/*">
          <>
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
            <Link to="/">go to main page</Link>
          </>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
