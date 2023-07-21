import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
    <Grid className='bg-black text-center text-white mt-10'
    container
    sX={{bgcolor:"black",color:"white",py:3}}>
        <Grid item xs={10} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Sobre nosotros</Typography>
            <div>
            <Button className='pb-5' variant='h6'>Donde nos encontramos</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6'>Productos</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6'>etc</Button>
            </div>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Contactanos</Typography>
            <div>
            <Button className='pb-5' variant='h6'>Donde nos encontramos</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6'>Productos</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6'>etc</Button>
            </div>
        </Grid>
    </Grid>
    </div>
  )
}

export default Footer