import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import Header from './component/Header';
import Products_services from './component/Products_services';
import Myaccount from './component/Myaccount';
import Productdetailspage from './component/Productdetailspage';



function App() {
  return (
    <React.Fragment>
       <Header/>
       <Switch>
          <Route exact path="/" component={Productdetailspage}/>
          <Route path="/Products_services" component={Products_services}/>
          <Route path="/Myaccount" component={Myaccount}/>
       </Switch>
       <h1>myapp</h1>
       

    </React.Fragment>
  );
}

export default App;
