import React, { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from 'react-modal';


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
            <Modal isOpen={isOpen}>
                <h1>Add New Product</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("product", { required: true })} />
                        <select {...register("type")}>
                            <option value="Drinks">Drinks</option>
                            <option value="Food">Food</option>
                        </select>
                        <input type="number" {...register("quantity", { min: 1, max: 1000 })} />
                        <input type="number" {...register("unitPrice", { min: 1, max: 100000 })} />
                        {errors.product && <span>This field is required</span>}
                        <button type="submit">Save</button>
                    </form>
                </div>
                <button onClick={toggleModal}>Cancel</button>

            </Modal>
        </>
    )
}

export default AddModal