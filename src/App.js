import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMemberComponent from './components/ListMemberComponent';
import CreateMemberComponent from './components/CreateMemberComponent';
import CreateTransactionComponent from './components/CreateTransactionComponent';
import ListTransactionMemberComponent from './components/ListTransactionMemberComponent';
import ListTransactionByDateComponent from './components/ListTransactionByDateComponent';
import FilterDateComponent from './components/FilterDateComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListMemberComponent}></Route>
                          <Route path = "/add-member" component = {CreateMemberComponent}></Route>
                          <Route path = "/add-simpanan" component = {CreateTransactionComponent}></Route>
                          <Route path = "/filter-date" component = {FilterDateComponent}></Route>
                          <Route path = "/detail-transaction-date/:startdate/:enddate" component = {ListTransactionByDateComponent}></Route>
                          <Route path = "/detail-transaction/:memberId" component = {ListTransactionMemberComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
