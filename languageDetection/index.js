import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const inputArray = process.argv.slice(2);
const inputLang = inputArray.join(" ");

const code = franc(inputLang);

if(code == 'und' || code.length < 3){
    console.log("Provide a better string next time!!!".red);
}else{
    console.log(langs.where("3", code).name.rainbow);
}

