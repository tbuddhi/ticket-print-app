import React, { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

type ModalProps = {
    modalIsOpen: boolean;
    toggleModal: any;
    handleAddNew: any;
}

type Inputs = {
    product: string;
    type: string;
    quantity: number;
    unitPrice: number;
};

const AddModal: React.FC<ModalProps> = ({
    modalIsOpen,
    toggleModal,
    handleAddNew
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    useEffect(() => {
        setIsOpen(modalIsOpen)
    }, [modalIsOpen])

    const onSubmit: SubmitHandler<Inputs> = data => {
        handleAddNew(data)
        toggleModal()
        reset();
    }

    return (
        <>
            <Modal isOpen={isOpen} style={customStyles}>
                <h2>Add New Product</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="product-name"
                                    label="Product name"
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    {...register("product", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="product-type"
                                    select
                                    fullWidth
                                    label="Product type"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="standard"
                                    {...register("type")}
                                >
                                    <option value="Drinks">Drinks</option>
                                    <option value="Food">Food</option>
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    type="number"
                                    fullWidth
                                    InputProps={{
                                        inputProps: {
                                            max: 1000, min: 1
                                        }
                                    }}
                                    {...register("quantity", { min: 1, max: 1000, required: true })}
                                    label="Item Quantity"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    type="number"
                                    fullWidth
                                    InputProps={{
                                        inputProps: {
                                            max: 100000, min: 1
                                        }
                                    }}
                                    {...register("unitPrice", { min: 1, max: 100000, required: true })}
                                    label="Unit price"
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                        <div style={{ paddingTop: 20 }}>
                            {errors.product && errors.quantity && errors.unitPrice &&
                                <Alert severity="error">This field is required</Alert>
                            }
                        </div>
                        <div className='modal__btnGroup'>
                            <Button variant='outlined' onClick={toggleModal}>Cancel</Button>
                            <Button variant='contained' type="submit">Save</Button>
                        </div>
                    </form>
                </div>

            </Modal>
        </>
    )
}

export default AddModal