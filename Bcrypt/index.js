const bcrypt = require('bcrypt');
//bcrypt is a password hashing function
const saltRounds = 12; //ideal rounds = 12

// const hashPassword = async function(pswd){
//     const salt = await bcrypt.genSalt(saltRounds);
//     console.log(salt);
//     const hash = await bcrypt.hash(pswd, salt);
//     console.log(hash);
// }
const hashPassword = async function(pswd){
    // const salt = await bcrypt.genSalt(saltRounds);
    // console.log(salt);
    const hash = await bcrypt.hash(pswd, saltRounds);
    console.log(hash);
}

const verifyPassword = async function(pswd, hash){
    const result = await bcrypt.compare(pswd, hash);
    console.log(result);
}

// hashPassword('monkey');
verifyPassword('monkey', '$2b$12$yqJsRVTcaNoRF6Bvgep1A.GPQfVDCRH9sJ9fS7TJ1Ya2j/YaucBZu');