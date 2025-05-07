const bcrypt = require('bcrypt');
const saltRounds = 12;

const hashPassword = async (pswd) =>{
    const hash = await bcrypt.hash(pswd, saltRounds);
    return hash;
}

const verifyUser = async(password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}  

module.exports.hashPassword = hashPassword;
module.exports.verifyUser = verifyUser;
