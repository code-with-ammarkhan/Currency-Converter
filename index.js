#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to 'CodeWithAmmar' - Currency Converter\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    USD: 1, // Base Currency
    EUR: 0.91, // European Currency (Euro)
    GBP: 0.76, // British Pound
    INR: 74.57, // Indian Rupees
    PKR: 277.99, // Pakistani Rupees
    // Add more currencies and their exchange rates here  
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Select the currency to convert from:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to_currency",
        message: "Select the currency to convert into:",
        type: "list",
        choices: ["USD", "EUR", "GBF", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    },
]);
// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
