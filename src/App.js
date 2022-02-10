import './App.css';
import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect 
} from 'react-router-dom';
import { logout } from './services/fetch-utils';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import CreatePage from './CreatePage';


function App() {
  //track the user in state
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  async function handleLogout() {
    //call the logout function
    await logout();
    //clear the user in state
    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* if there is a user in state, render out a link to the board games list, the create page, and add a button to let the user logout */}
          {
            user && 
            <>
              <NavLink to="/board-games">Board Game List</NavLink>
              <NavLink to="/create">Create</NavLink>
              <button onClick={handleLogout}>Logout</button></>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {/* if there is a user, redirect to the wardrobe list. Otherwise, render the auth page. Note that the AuthPage will need a function called setUser that can set the user state in App.js */}
              {
                user
                  ? <Redirect to="/wardrobe" />
                  : <AuthPage setUser={setUser} />
              } 
            </Route>
            <Route exact path="/wardrobe">
              {/* if there is a user, render the wardrobe list. Otherwise, redirect to the home route/auth page */}
              {
                user
                  ? <ListPage />
                  : <Redirect to="/"/>
              }
            </Route>
            <Route exact path="/wardrobe/:id">
              {/* if there is a user, render the detail page. Otherwise, redirect to the home route/auth page */}
              {
                user
                  ? <DetailPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/create">
              {/* if there is a user, render the create page. Otherwise, redirect to the home route/auth page */}
              {
                user
                  ? <CreatePage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
