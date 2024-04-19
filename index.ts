import inquirer from "inquirer";

const currency :any = {
    USD: 1,// base currency(US Dollar)
    KWD :0.31, //Kuwaiti Dinar
    EUR: 0.92, //Euro
    INR :83.3, // Indian Rupee
    AED :3.67, // UAE Dirham
    SAR :3.75, // Saudi Riyal
    PKR :277.54, //pakistani Rupee

}

let user_answer = await inquirer.prompt(
    [
        {
    name : "from",
    message : "Enter From Currency",
    type : "list",
    choices :["USD","KWD","EUR","INR","AED","SAR","PKR"]
        },
        
        {
            name : "to",
            message : "Enter To Currency",
            type : "list",
            choices :["USD","KWD","EUR","INR","AED","SAR","PKR"]
         },
         
         {
            name:"amount" ,
            message : "Enter amount to convert",
            type : "number"
         }
    ]
)
let fromAmount = currency[user_answer.from];
let  toAmount   = currency[user_answer.to] ;
let amount = user_answer.amount;
let baseAmount = amount / fromAmount // convert the input amount into Base currency (USD)
let convertedAmount = baseAmount * toAmount // Convert the Base Amount to the desired currency
console.log(baseAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
