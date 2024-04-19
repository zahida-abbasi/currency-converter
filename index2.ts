import inquirer from "inquirer";
console.log("==== Welcome to the Dynamic Currency Converter!=== ");
console.log("Please follow the prompts below:")

interface Currency {
    [key: string]: number;
}
const currency: Currency = {
    USD: 1,      // base currency(US Dollar)
    KWD: 0.31,   // Kuwaiti Dinar
    EUR: 0.92,   // Euro
    INR: 83.3,   // Indian Rupee
    AED: 3.67,   // UAE Dirham
    SAR: 3.75,   // Saudi Riyal
    PKR: 277.54, // Pakistani Rupee
};

async function currencyConverter() {
    const choices = Object.keys(currency);

    let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices,
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices,
        },
        {
            name: "amount",
            message: "Enter amount to convert",
            type: "number",
        },
    ]
);

    let fromAmount = currency[userAnswer.from];
    let toAmount = currency[userAnswer.to];
    let amount = userAnswer.amount;

    let baseAmount = amount / fromAmount; // convert the input amount into Base currency (USD)
    let convertedAmount = baseAmount * toAmount; // Convert the Base Amount to the desired currency

    console.log(`${amount} ${userAnswer.from} equals ${convertedAmount.toFixed(2)} ${userAnswer.to}`);
}

currencyConverter();
