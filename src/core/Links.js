/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { isAunthenticated, signout } from '../auth';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
  
    <Typography className={classes.root}>
      
      <Link href="/"  color="inherit">
        HOME
      </Link>
      <Link href="/user/dashboard"  color="inherit">
        Dashboard
      </Link>
      {!isAunthenticated()  && 
      
      (<><Link href="/signup" color="inherit">
        SIGNUP
      </Link>
      <Link href="/signin" color="inherit">
        SIGN IN
      </Link></>)
      } 


      {isAunthenticated()  &&  
     ( <>
      
      <span  color="inherit" onClick={() => {signout(()=> {
        console.log('lll')
      })}}>
        SIGN OUT
      </span>
      </>)
      }
     
    </Typography>
    
    
  );
}
