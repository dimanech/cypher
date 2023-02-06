#!/usr/bin/env node
import crypto from 'crypto';

const parseOption = arg => arg.split(/=/);
const cipher = parseOption(process.argv[2]) || process.env.CIPHER_MACHINE_CIPHER;
const site = parseOption(process.argv[3]);
const passwordLength = 16;
const iterations = 10000;
const allowedChars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', ';', '<', '=',
    '>', '?', '@', '^', '_', '`', '{', '|', '}', '~'
];

function generatePassword(cipher, site) {
    if (!site || !cipher) {
        return '';
    }

    const derivedKey = crypto.pbkdf2Sync(cipher, site.toLowerCase(), iterations, passwordLength, 'sha256');
    const indices = Array.from(derivedKey);
    const password = indices.map(index => allowedChars[index % allowedChars.length]).join('');

    return { indices, password };
}

const result = generatePassword(cipher[0], site[0]);

console.log(result.password);
