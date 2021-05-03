import React,{useState} from 'react';
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core';
import useStyles from './checkoutStyles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
const steps = ["shipping adress" , "payment details"];
const Checkout = () =>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const Confirmation = ()=>{
        return <div>
        Confirmation
        </div>
    }
    //function will render depends on activeStep
    const Form = ()=>{
        if(activeStep==0)
        return <AddressForm />
        else 
        return <PaymentForm />
    }
return(
    <>
    <div className = {classes.toolbar}/>
    <main calssName = {classes.layout}>
    <Paper className = {classes.paper}>
        <Typography variant = "h4" align = "center">Checkout</Typography>
        <Stepper activeStep={0} className={classes.stepper}>
        {
            steps.map((step) =>{
              return  <Step key = {step}>
                    <StepLabel>{step}</StepLabel>
                </Step>
                
            })
        }
        </Stepper>
        {
            (activeStep == steps.length) ? <Confirmation /> : <Form />
            
        
        }
    </Paper>
    </main>
    </>
);
}
export default Checkout;