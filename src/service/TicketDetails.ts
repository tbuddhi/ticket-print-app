type TicketProps = {
    product: string;
    type: string;
    quantity: number;
    unitPrice: number;
}[];

export const ticketDetails: TicketProps = [
    { product: 'Water', type: 'Drinks', quantity: 10, unitPrice: 1 },
    { product: 'Chicken wings', type: 'Food', quantity: 3, unitPrice: 5 },
    { product: 'Steak', type: 'Food', quantity: 1, unitPrice: 9 },
    { product: 'coffee', type: 'Drinks', quantity: 4, unitPrice: 2 },
    { product: 'Wine bottle', type: 'Drinks', quantity: 1, unitPrice: 7 },
]

// Using this for loop we can print each object in the console
for (let productItem of ticketDetails) {
    console.log(productItem);
}

// using map function, can print this each product details in each row
ticketDetails.map( product => 
    console.log(
        "Product:", product.product, '|',
        "Type:", product.type, '|',
        "Quantity:", product.quantity, '|',
        "Unit Price:", product.unitPrice, '|',
    )
)

// Using console.table we can show this array in better way
console.table(ticketDetails);