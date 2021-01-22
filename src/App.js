import './App.css';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/page-composants/Accueil';
import CharaCities from './components/page-composants/CharaCities';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Characters/:name" component={CharaCities} />
        <Route path="/Characters/search?=:name" />
      </Switch>
    </div>
  );
}

export default App;
