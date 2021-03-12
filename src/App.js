import classes from './App.module.css';
import React, {Component} from 'react';
import Layout from './components/Layouts/Layouts';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component{
  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}


export default App;
