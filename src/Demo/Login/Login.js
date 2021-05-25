
import React, { useState ,Suspense} from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import  { getUsers } from "./TokenAction";
import {connect} from 'react-redux'
import Loader from '../../App/layout/Loader'
import Aux from "../../hoc/_Aux";
import ScrollToTop from '../../App/layout/ScrollToTop'
import routes from "../../route";
import Loadable from 'react-loadable';

import { Switch, Route } from 'react-router-dom';

const AdminLayout= Loadable({
    loader: () => import('../../App/layout/AdminLayout'),
    loading: Loader
});

const Login=(props)=>{
    const paperStyle={padding :20,height:'60vh',width:280, margin:"80px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [username,setVal]=useState("");
    const handleChange= e =>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
    const [password,setPas]=useState("");
    const handleChangePass= e =>{
        console.log(e.target.value);
        setPas(e.target.value);
        
    }
    const [token,setToken]=useState(null);  
    const redirect=()=>{
       // props.getUsers(token); 
      let tk= window.localStorage.getItem("token")
        axios.defaults.headers.common['Authorization'] =
        `Token ${tk}`;

        props.method(true);
    };
  
    
    const url="https://db-users.herokuapp.com/api-token-auth/";
    const handleSıgnIn=(()=>{
        return new Promise(function(resolve, reject) {
         axios.post(url, 
            {"username":username,"password":password}
         )
        .then(response=> {
            resolve(response);
           setToken(response.data);
           window.localStorage.setItem('token',response.data["token"]);})
        .then(redirect())
        .catch(error=> console.log(error));
        }
    )
    
      
});//promise end
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

    if(token)
    {

        return (
            <Aux>
            <ScrollToTop>
                <Suspense fallback={<Loader/>}>
                    <Switch>
                        {menu}
                        <Route>
                            <AdminLayout isOk={true} />
                        </Route>
                    </Switch>
                </Suspense>
            </ScrollToTop>
        </Aux>
        );
    
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField value={username} onChange={handleChange} placeholder="Enter username" fullWidth required/>
                <TextField  style={{marginTop:'4vh'}} value={password }   onChange={handleChangePass} placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button  type='submit' color='primary' variant="contained"  onClick={handleSıgnIn} style={btnstyle} fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    )

}





const mapStateToProps  = (state) => ({token:state.token})

export default connect(mapStateToProps, {getUsers})(Login)
