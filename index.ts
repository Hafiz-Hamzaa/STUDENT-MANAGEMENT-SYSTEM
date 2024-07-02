#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bold.green("---------------------------------------------------------------------------"));
console.log(chalk.bold.yellow(                    "STUDENT MANAGEMENT SYSTEM"));
console.log(chalk.bold.green("---------------------------------------------------------------------------"));

const randomNumber : number = Math.floor(10000 + Math.random() * 80000)
let myBalance : number = 0

let answer = await inquirer.prompt([{
    name : "students",
    type : "input",
    message : chalk.bold.yellow("Enter your name : "),
    validate : function(value) {
        if (value.trim() !== "") {
            return true
        }
        return "Kindly enter a non-empty value."
    },

    },
    {
        name : "courses",
        type : "list",
        message : chalk.bold.green("Kindly Enter a course to enroll"),
        choices : ["Graphic Designing" , "Web Development" , "App Development" , "Digital Marketing"]
    }
    ]
);

const courseFee : {[key : string] : number} = {
    "Web Development" : 10000,
    "App Development" : 12000,
    "Graphic Designing" : 10000,
    "Digital Marketing" : 8000
}

console.log(`Course Fees : ${courseFee[answer.courses]}`);
console.log(`Balance : ${myBalance}`);

let paymentType = await inquirer.prompt([{
    name : "payment",
    type : "list",
    message  : chalk.bold.yellow("Select Payment Method"),
    choices : ["Easy Paisa" , "Bank Transfer" , "Jazz Cash"],

    },
    {
        name : "amount",
        type : "input",
        message : "Bank Transfer : ",
        validate : function(value) {
            if(value.trim() !== "") {
                return true;
            }
            return "Kindly enter a non-empty value"
        }
    }
    
    ]
);
console.log(chalk.bold.green(` You have been selected paymet method ${paymentType.payment}`));

const courseFees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if(courseFees === paymentAmount) {
    console.log(chalk.bold.yellow(` ---------------------------Congratulations you have sucessfully enrolled in ${answer.courses} ------------------------------`));

    let ans = await inquirer.prompt([{
        name : "select",
        type : "list",
        message : chalk.bold.green("Select anyone option to go for next step"),
        choices : ["View Status" , "Exit"]
    }])

    if(ans.select === "View Status") {
        console.log(chalk.bold.green("------------------------------------------------------"));
        console.log(chalk.bold.yellow("STATUS"));
        console.log(chalk.bold.green("------------------------------------------------------"));
        
        
        console.log(chalk.bold.green(` Student name : ${answer.students}`));
        console.log(chalk.bold.green(` Student ID : ${randomNumber}`));
        console.log(chalk.bold.green(` Course : ${answer.courses}`));
        console.log(chalk.bold.green(` Course Fess Paid : ${paymentAmount}`));
        console.log(chalk.bold.green(` Balance : ${myBalance += paymentAmount}`));
    }else {
        console.log(chalk.bold.yellow("Exit"));
        
    }

    }else {
        console.log(chalk.bold.green("Invalid amount"));
    }







