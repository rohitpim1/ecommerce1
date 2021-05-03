import React,{useState} from 'react';
import {InputLabel,Select,MenuItem,Grid,Typography, Menu} from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import CustomTextField from './CustomTextField';
const AddressForm = ()=>{
    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry,setShippingCountry] = useState('');
    const [shippingSubDivisions,setShippingSubdivisions] = useState([]);
    const [shippingSubDivision,setShippingSubdivision] = useState('');
    const [shippingOptions,setShippingOptions] = useState([]);
    const [shippingOption,setShippingOption] = useState('');
    

    const methods = useForm();
    return(
        <>
        <Typography variant = "h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=" ">
                <Grid container spacing={3}>
                    <CustomTextField required name = "firstName" label="first name"/>
                    <CustomTextField required name = "LastName" label="last name"/>
                    <CustomTextField required name = "email" label="email"/>
                    <CustomTextField required name = "Address" label="Address"/>
                    <CustomTextField required name = "city" label="city"/>
                    <CustomTextField required name = "pin-code" label="pin-code"/>
                   
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>
 
                </Grid>
            </form>
        </FormProvider>
        </>
    );
}
export default AddressForm;