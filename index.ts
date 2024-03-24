#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game!")


const answer = await inquirer.prompt([
    {
        name: "userguessingNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },

]);

if(answer.userguessingNumber === randomNumber){
    console.log("Congratulations!! you are guessing write number.");

}else{
    console.log("sorry!! you are guessing wrong number.");
}

