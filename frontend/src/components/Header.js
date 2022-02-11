import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                SoccerShorts Shopping
            </Typography>
            <Link to="/">
                <Button color="primary">Tela Inicial</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Fale Conosco</Button>
            </Link>
            <Cart />
        </Grid>
    )
}

export default Header;
