import React, { useState } from 'react'

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

    return (
        <div>
            <button onClick={handleAddModal}>Add</button>

            <ul className='products'>
                {productDetails.map((item: any, index: number) => {
                    return (
                        <li key={index} className="products__item">
                            <div>
                                <div>{item.product}</div>
                                <div>{item.type}</div>
                                <div>{item.quantity}</div>
                                <div>{item.unitPrice}</div>
                            </div>
                            <div>
                                <button name={item.product} onClick={handleRemove}>Remove</button>
                            </div>
                        </li>
                    )
                })
                }
            </ul>

            <AddModal
                modalIsOpen={openModal}
                toggleModal={handleAddModal}
                handleAddNew={addNewProduct}
            />
        </div>
    )
}
