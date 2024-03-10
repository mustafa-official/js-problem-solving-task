function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return 'Invalid Number';
    }
    const perTicket = 120 * ticketSale;
    const totalExpense = 500 + (8 * 50);
    const total = perTicket - totalExpense;
    return total;
}