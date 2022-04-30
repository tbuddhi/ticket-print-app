import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import { Ticket } from './Ticket';

const newTheme = createTheme({
  palette: {
    primary: {
      main: '#5E7BFD',
      light: '#EBAFE1',
      dark: '#3A53A2'
    },
    secondary: {
      main: "#ebafe9",
      light: '#EBD4F7'
    },
    error: {
      main: '#FF9FB1',
      light: '#FF9FB1'
    },
    background: {
      paper: '#EBD4F7'
    },
    text: {
      primary: '#494949'
    }
  },
});

const InvoiceTicket = () => {
  return (
    <div>
      <div className='btnHome-wrapper'>
        <Link to="/"><HomeOutlinedIcon sx={{ color: 'white' }} /></Link>
      </div>
      <ThemeProvider theme={newTheme}>
        <Container>
          <Box maxWidth="sm" className='appBox'>
            <header>
              <Typography
                variant="h4"
                component="div"
                className='appBox__title'
              >
                TICKET PRINTING APP
              </Typography>
            </header>
            <main>
              <Ticket />
            </main>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default InvoiceTicket
