const args = process.argv.slice(2); //first arg is always the location of node in your system, second argument is the location of folder or any file that you create, rest are the arguments that you passed
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

