const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!");
    } else {
        console.log("INCORRECT!");
    }
}

// hashPassword('monkey');

login('monkey1', 'dpskdnEfnyLdL7k/s4Bmex4LmUGe2SrGMbt6qSdkspdrr219mN0Z/ZdkM8m')
