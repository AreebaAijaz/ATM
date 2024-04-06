import inquirer from "inquirer";
let myPin = 1122;
let myBalance = 10000; //dollar
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter your Pin",
        type: "number",
        name: "Pin",
    },
]);
if (pinAnswer.Pin == myPin) {
    console.log("Correct Pincode.");
}
else {
    console.log("You entered wrong pincode.");
}
let operationAnswer = await inquirer.prompt([
    {
        name: "Operations",
        message: "select one of the following operations!",
        type: "list",
        choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
]);
if (operationAnswer.Operations == "Withdraw") {
    let amountAnswer = await inquirer.prompt([
        {
            message: "Enter your amount",
            type: "number",
            name: "Amount",
        }
    ]);
    if (amountAnswer.Amount > myBalance) {
        console.log("Insufficient Balance");
    }
    if (amountAnswer.Amount <= myBalance)
        console.log(`Your remaining balance is ${(myBalance -= amountAnswer.Amount)}`);
}
else if (operationAnswer.Operations === "Check Balance") {
    console.log(`Your current balance is ${myBalance}`);
}
else if (operationAnswer.Operations == "Fast Cash") {
    let fastAnswer = await inquirer.prompt([
        {
            message: "Your amount please!",
            name: "fastcash",
            type: "list",
            choices: ["2000", "5000", "7000", "10000"],
        },
    ]);
    myBalance -= fastAnswer.fastcash;
    console.log(`Your remaining balance is ${myBalance}`);
}
