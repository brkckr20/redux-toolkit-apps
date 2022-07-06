import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Detail from './pages/Detail';
import Qutoes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/character/:char_id" component={Detail} />
        <Route exact path="/quotes" component={Qutoes} />
        <Route exact path="/quotes/:quote_id" component={QuoteDetail} />

      </Switch>
    </div>
  );
}

export default App;
