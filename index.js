import inquirer from "inquirer";
const currency = {
    USD: 1,
    KWD: 0.31,
    EUR: 0.92,
    INR: 83.3,
    AED: 3.67,
    SAR: 3.75,
    PKR: 277.54, //pakistani Rupee
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "KWD", "EUR", "INR", "AED", "SAR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "KWD", "EUR", "INR", "AED", "SAR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter amount to convert",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // convert the input amount into Base currency (USD)
let convertedAmount = baseAmount * toAmount; // Convert the Base Amount to the desired currency
console.log(baseAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
//console.log(`${user_answer.amount}${user_answer.from}${user_answer.to}`);
//console.log(`${amount} ${user_Answer.from} equals ${convertedAmount.toFixed(2)} ${user_Answer.to}`);
