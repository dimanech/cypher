// https://github.com/dotcypress/password/blob/master/pages/index.js
// https://github.com/elfenware/obliviate-web/blob/main/src/App.svelte

const passwordLength = 16;

const ALLOWED_CHARS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', ';', '<', '=',
    '>', '?', '@', '^', '_', '`', '{', '|', '}', '~'
];

async function generatePassword(pbkdf2Hmac, cipher, site) {
    if (!site || !cipher) {
        return '';
    }

    const derivedBuffer = await pbkdf2Hmac(
        cipher,
        site.toLowerCase(),
        10000, // could be 10000 + deviation
        passwordLength,
        'SHA-256'
    );

    const indices = new Uint8Array(derivedBuffer);

    return {
        indices: indices,
        password: Array.from(indices)
            .map(index => ALLOWED_CHARS[index % ALLOWED_CHARS.length])
            .join('')
    };
}

export default generatePassword;
