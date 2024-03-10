function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }
    let allPayment = 0;
    let totalFromTax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            totalFromTax = (arr[i] * 20) / 100;
        }
        allPayment += arr[i];
    }

    let totalSavings = (allPayment - totalFromTax) - livingCost;
    if (totalSavings < 0) {
        return 'earn more';
    }
    return totalSavings;
}
