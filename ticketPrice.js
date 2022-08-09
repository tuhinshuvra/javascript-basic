



function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 80;

    if (ticketQuantity <= 100) {
        const price = first100Rate * ticketQuantity;
        return price;
    }

    else if (ticketQuantity <= 200) {
        const first100Price = first100Rate * 100;
        const restTicketPrice = second100Rate * (ticketQuantity - 100);
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }

    else if (ticketQuantity > 200) {
        const first100Price = first100Rate * 100;
        const second100Price = second100Rate * 100;
        const restTicketPrice = restTicketRate * (ticketQuantity - 200);
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

const totalCost = ticketPrice(250);
console.log(totalCost);

