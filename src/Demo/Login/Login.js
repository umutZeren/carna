
import React, { useState ,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import Loader from '../../App/layout/Loader/';
import Loadable from 'react-loadable';
import routes from '../../routes';
import Aux from "../../hoc/_Aux";
import ScrollToTop from "../../App/layout/ScrollToTop";


const Login=()=>{
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
    
const AdminLayout = Loadable({
    loader: () => import('../../App/layout/AdminLayout'),
    loading: Loader
});
    let label="username";
    const paperStyle={padding :20,height:'60vh',width:280, margin:"80px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [username,setVal]=useState("");
    const handleChange= e =>{
        label="";
        console.log(e.target.value)
        setVal(e.target.value)
    }
    const [password,setPas]=useState("");
    const handleChangePass= e =>{
        console.log(e.target.value);
        setPas(e.target.value);
    }
    const [token,setToken]=useState(null);  
 
    const url="https://db-users.herokuapp.com/api-token-auth/";
    const handleSıgnIn=(()=>{
        return new Promise(function(resolve, reject) {
         axios.post(url, 
            {"username":username,"password":password}
         )
        .then(response=> {
            resolve(response);
            setToken(response.data);
        })
        .catch(error=> console.log(error));
        }
    )});
    if(token != null)
    return( 
      

            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            <Route path="/" component={AdminLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        )
    else{
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
    )}
}

export default Login;