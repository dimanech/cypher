import pbkdf2Hmac from 'pbkdf2-hmac';
import generatePassword from '../static/js/password-generator.mjs';

const parseOption = arg => arg.split(/=/);
const cipher = parseOption(process.argv[2]) || ENIGMA_CIPHER;
const site = parseOption(process.argv[3]);

console.log(cipher[0], site[0])

const result = await generatePassword(pbkdf2Hmac,cipher[0], site[0]);

console.log(result.password);
