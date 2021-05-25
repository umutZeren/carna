import React, { Component, Suspense } from 'react';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import  { getUsers } from "../Demo/Login/TokenAction";
import {connect} from 'react-redux'

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import Login from "../Demo/Login/Login"
const AdminLayout= Loadable({
    loader: () => import('../App/layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
 
    constructor(props)
    {
        console.log("in constructor");
        super(props);

        this.state=
        {data:false,
            isAut:false,
            token:props.token
            }
    }
     goAdmin=()=>{
        this.setState.isAut=true;
    }
    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });
    
        if(!this.props.isAut)
        {

            return (
                <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            <Route>
                                <AdminLayout />
                            </Route>
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
            );

        }
        else{return(<></>)}
  
}
}


const mapStateToProps  = (state) => ({token:state.token})

export default connect(mapStateToProps, {getUsers})(App)
