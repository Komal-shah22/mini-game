#!usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
import { continueCode,data, headAndTail, numGuessGame, starMakingGame } from "./game.js";
await data()
const mainfunc = async ()=>{
    const data = await inquirer.prompt([
        {
            name:'seclect',
            type:'list',
            message:chalk.bold.blue('\nHears are some games for you'),
            choices:['Star Making Game','Number Guessing','Head and Tail']
        }
    ]);
    switch(data.seclect){
        case 'Star Making Game':{
            await starMakingGame()
            await continueCode(mainfunc)
            break;
        }
     
        case 'Number Guessing':{
            await numGuessGame()
            await continueCode(mainfunc)
            break;
        }
        case 'Head and Tail':{
            await headAndTail()
            await continueCode(mainfunc)
            break;
        }
        
    }
}
mainfunc()
