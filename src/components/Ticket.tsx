import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { styled } from '@mui/material/styles';
import { TransitionGroup } from "react-transition-group";

import Collapse from '@mui/material/Collapse';

import { ticketDetails } from '../service/TicketDetails'
import AddModal from './AddModal'

export const Ticket = () => {
    const [productDetails, updateProducts] = useState(ticketDetails)
    const [openModal, setOpenModal] = useState(false)

    const handleRemove = (e: any) => {
        const productName = e.target.getAttribute("name")
        updateProducts(productDetails.filter(item => item.product !== productName))
    }

    const handleAddModal = () => {
        setOpenModal(!openModal)
    }

    const addNewProduct = (data: any) => {
        console.log("After Modal", data);
        updateProducts([...productDetails, data])
    }

    const StyledFab = styled(Fab)({
        position: 'relative',
        zIndex: 0,
        top: -6,
        left: '45%',
        margin: '0 auto',
    });

    return (
        <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }} >
            <StyledFab color="primary" aria-label="add" onClick={handleAddModal}>
                <AddIcon />
            </StyledFab>
            <List sx={{ width: '100%', }}>
                <TransitionGroup>
                    {productDetails.map((item: any, index: number) => {
                        return (
                            <Collapse key={index} timeout={1000}>
                                <ListItem
                                    key={index}
                                    sx={{ boxShadow: 3, mb: 2, bgcolor: '#FFF', borderRadius: 2, p: 2 }}
                                >

                                    <Grid container>
                                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <ListItemAvatar>
                                                <Avatar variant="square" sx={{ bgcolor: '#ececec' }}>
                                                    {item.type === 'Drinks' ? <BrunchDiningIcon color="primary" /> : <FastfoodIcon color="success" />}
                                                </Avatar>
                                            </ListItemAvatar>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="h6" component="div" color="primary.dark" >
                                                {item.product}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                {item.type}
                                            </Typography>
                                            <Typography sx={{ pl: 3, fontSize: '.8rem' }} variant="caption">
                                                x {item.quantity} items
                                            </Typography>
                                        </Grid>
                                        <Grid item xs sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                                            <Typography variant="caption">
                                                Unit price:
                                            </Typography>
                                            <Typography variant="h6" color='text.primary'>
                                                $ {item.unitPrice}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Button
                                                color="error"
                                                variant="outlined"
                                                name={item.product}
                                                onClick={handleRemove}
                                                endIcon={<DeleteIcon />}
                                            >
                                                Remove
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </Collapse>
                        )
                    })
                    }
                </TransitionGroup>
            </List>

            <AddModal
                modalIsOpen={openModal}
                toggleModal={handleAddModal}
                handleAddNew={addNewProduct}
            />
        </Paper>
    )
}
