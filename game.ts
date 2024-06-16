#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.bgWhite.black(`\t\t\t ~~~~~~~~WELCOME TO MY CODE~~~~~~~~\t\t\n`));
export const data = async ()=>{
const input = await inquirer.prompt([
    {
      name:'user',
      type:'input',
      message:chalk.bold.magentaBright('please enter your name & make sure tittalcase :\n'),
      validate:(val:string) =>{
        const firstchar:string = val.charAt(0).toUpperCase();
        if(val.charAt(0)===firstchar){
           return true
        }else{
          return chalk.bold.red('Make sure that your name is in tittelcase...')
        }
      } 
    }
]);
const userName:string = input.user.split(' ').join('');
const emailAddress:string =userName + Math.floor(Math.random()*5000) + '@gmail.com';
console.log(chalk.bold.italic.bgCyan.white(`Generated Email Address : ${emailAddress}\n`));
const code = await inquirer.prompt([
  {
    name:'code',
    type:'input',
    message:chalk.bold.italic.magentaBright('please Generate a code :')
  }
]);
 await inquirer.prompt([
  { 
    name:'generate',
    type:'input',
    message:chalk.bold.italic.magentaBright('please enter a code to your generate & login your account :'),
    validate:(val:string)=>{
     if(val===code.code){
      return true
     }else{
      return chalk.bold.red('your password is incorrect.')
     }
    }
  }

 ]);
console.log(chalk.bold.italic.bgCyan.white(`your code is correct ${code.code}\n`));
const verificationCode:number = Math.floor(Math.random()*5000);
console.log(chalk.bold.italic.magentaBright(`Your verification code :${verificationCode}\n`));
await inquirer.prompt([
  {
    name :'userVerf',
    type:'input',
    message:chalk.bold.italic.magentaBright('Enter your verification code :\n'),
    validate:(val:string)=>{
      if(val !==verificationCode.toString()){
        return chalk.bold.red('your verification code is incorrect.')
      }else{
        return true
      }
    }
  }
]);
console.log(chalk.bold.italic.whiteBright(`Welcome ${input.user}\n\nHere is your details, please save them.\n\nEmail address: ${emailAddress}\n\nPassword: ${code.code}\n\n`));
};
const checkCode = async(gameName:string)=>{
   const gameCode :number = Math.floor(Math.random()*5000);
   console.log(chalk.bold.italic.magentaBright(`${gameName} ${gameCode}`));
   await inquirer.prompt([
    {
      name:'usercode',
      type:'input',
      message:'Enter the game code:',
      validate:(val:string)=>{
        if(val===gameCode.toString()){
          return true
        }else{
         return chalk.bold.red (`your pin is incorrect :`)
        }
      }
    }
   ]);
}
// !star making game
export const starMakingGame = async ()=>{
  await checkCode('star Making Game');
  const ask = await inquirer.prompt([
    {
      name:'quantity',
      type:'input',
      message:chalk.bold.magenta('Enter the quantity')
    }
  ]);
  let star = '';
  for(let i =1;i<=ask.quantity;i++){
   star += '*';
   console.log(chalk.bold.green(star));
  }
}
// !Number guessing game
export const numGuessGame = async()=>{
  await checkCode('Number Guessing Name')
  const randomNum = Math.floor(Math.random()*5+1);
  const userguess = await inquirer.prompt([
    {
      name:'num',
      type:'input',
      message:chalk.bold.magenta('guess the number between 1 and 5 '),
      validate:(val:string)=>{
        let value =Number(val)
        if(value > 5 || value > 1){
           return 'select number between 1 and 5';
        }else{
            return true
        }
      }
    }
  ]);
  let message =randomNum=== userguess.num?'you guessed the write number':'you guess the wrong number';
  console.log(chalk.bold.blue(message));
  console.log(chalk.bold.yellow(`\nThe computer guessed number was ${randomNum}`));
};
// !Head and Tail Game
export const headAndTail = async()=>{
  await checkCode('Head and Tail')
  const randomNum:number = Math.floor(Math.random()* 2)
  let computerAns:string =''
  switch(randomNum){
    case 0:
      computerAns ='head';
      break;
    case 1:
      computerAns ='tail';
      break;
  }
  const userguess:{
    ans:string;
  }= await inquirer.prompt([
    {
      name:'ans',
      type:'input',
      message:chalk.bold.magenta('Head And tail ?')
    }
  ]);
  let message:string = computerAns===userguess.ans.toLowerCase()?'you win':'you lose';
  console.log(message);
  
}
export const continueCode = async (Func:any)=>{
  const message = await inquirer.prompt([
    {
      name:'msg',
      type:'list',
      message:chalk.bold.magenta('Do you want to continue...?'),
      choices:['Yes','No']
    }
  ]);
  switch(message.msg){
    case 'yes':
      await data()
      await Func()
      break;
    case 'No':
      console.log(chalk.bold.bgGreen.whiteBright('~~~~~~~~~~~~~'));
      console.log(chalk.bold.bgGreen.whiteBright('             '));
      console.log(chalk.bold.bgGreen.whiteBright('  Thank you  '));
      console.log(chalk.bold.bgGreen.whiteBright('             '));
      console.log(chalk.bold.bgGreen.whiteBright('~~~~~~~~~~~~~'));

      process.exit()
  }
};







