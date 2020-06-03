import React, {useEffect} from 'react';
import Header from './Header.js';
import { withRouter } from 'react-router-dom';


const  PersistentDrawerLeft = (props)=> {

  useEffect(()=>{
    console.log('Admin Panel...')
    var x = localStorage.getItem("sessionid");
    console.log('xxxx',x)
    if(x === null){
      props.history.push('/')
    }
  })

  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}

export default withRouter(PersistentDrawerLeft);
