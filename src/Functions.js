export function calculateTotal(amount, period) {
    // Amounts
    // 0 - 1000€ = 25%
    // 1001€ - 500€ = 20%
    // 5001€ - 10000€ = 15%
    // +10000€ = 10%

    let totalAmount;

    if (amount <= 1000) {
        totalAmount = amount * .25;
    } else if (amount > 1000 && amount <=5000) {
        totalAmount = amount * .20;
    } else if (amount > 5000 && amount <=10000) {
        totalAmount = amount * .15;
    } else {
        totalAmount = amount * .10;
    }

    // Period
    // 3 months = 5%
    // 6 months = 10%
    // 12 months = 15%
    // 24 months = 20%
    // 36 months = 25%
    // 60 months = 35%

    let totalPeriod = 0;

    switch (period) {
        case 3:
            totalPeriod = amount * .05;
            break;
        case 6:
            totalPeriod = amount * .1;
            break;
        case 12:
            totalPeriod = amount * .15;
            break;
        case 24:
            totalPeriod = amount * .20;
            break;
        case 36:
            totalPeriod = amount * .25;
            break;
        case 60:
            totalPeriod = amount * .35;
            break;
        default:
            break;
    }

    return totalPeriod + totalAmount + amount;
}

