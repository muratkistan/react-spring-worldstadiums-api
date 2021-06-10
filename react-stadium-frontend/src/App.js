
import StadiumList from './pages/StadiumList';
import Header from './components/Header';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import StadiumEkle from './components/StadiumEkle';
import StadiumDuzenle from './components/StadiumDuzenle';
import StadiumPage from './pages/StadiumPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={StadiumList}></Route>
            <Route path="/stadiums" component={StadiumList}></Route>
            <Route path="/create-stadium" component={StadiumEkle}></Route>
            <Route path="/update/:id" component={StadiumDuzenle}></Route>
            <Route path="/stadiumpage/:id"  component={StadiumPage}></Route>
          </Switch>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
