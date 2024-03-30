#! /usr/bin/env node

import inquirer from "inquirer";

let todos = []
let condition = true;


while(condition){
        
const list = await inquirer.prompt([
   
    {
        type:"input",
        name:"ques1",
        message:"What you want to add in your todos"
    },
    {
        type:"confirm",
        name:"ques2",
        message:"ARE you sure you want to add more todo"
    }
])

todos.push(list.ques1);
condition = list.ques2;
console.log(todos);

}

console.log("THANKS FOR LIST");


