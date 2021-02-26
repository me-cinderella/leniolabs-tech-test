import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from '../components/Header/CustomHeader';
import Footer from '../components/Footer/CustomFooter';
import CongressMembersList from '../components/Lists/CongressMembers';
import Detail from '../components/Detail';

const Routes = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={CongressMembersList} />
          <Route path='/:id' component={Detail} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default Routes;