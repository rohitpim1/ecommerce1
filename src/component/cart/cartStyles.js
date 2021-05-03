import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) =>({

    toolbar:theme.mixins.toolbar,
    title:{
        marginTop:'5%',
    },
    // design for empty button
    emptyButton:{
        minWidth : '150px',
        [theme.breakpoints.down('xs')]:{
            marginBottom:'5px',
            paddingRight:'5px',
        },
    },

    //design for checkout buutton
    checkoutButton:{
        minWidth:'150px',

    },
    link:{
        textDecoration:'none',
        fontSize : '20px',
        display:'block',
    },

    //dsign for Cart details
    cardDetails : {
        display:'flex',
        margintop:'10%',
        width:'100%',
        paddingTop:'10%',
        justifyContent: 'space-between',
    },
}));