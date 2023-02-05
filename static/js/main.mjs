import pbkdf2Hmac from './libs/pkdf2Hmac.js';
import generatePassword from "./password-generator.mjs";
import generateEmoji from "./emoji-generator.mjs";

function generateBackgroundColor(indices) {
    if (!indices) {
        return;
    }

    const colors = new Array(9).fill('')
        .map((value, index) => indices[index] % 256);

    const colorsRgba = {
        color1: `rgba(${colors.slice(0, 3).join(',')}, 0.5)`,
        color2: `rgba(${colors.slice(3, 6).join(',')}, 0.5)`,
        color3: `rgba(${colors.slice(6, 9).join(',')}, 0.5)`,
    };

    document.documentElement.style.setProperty('--color1', colorsRgba.color1);
    document.documentElement.style.setProperty('--color2', colorsRgba.color2);
    document.documentElement.style.setProperty('--color3', colorsRgba.color3);
}

async function handleGeneratePassword() {
    var site = document.getElementById("site").value;
    var cipher = document.getElementById("cipher").value;

    if (site.length > 0) {
        var password = await generatePassword(pbkdf2Hmac,cipher, site);
        document.getElementById("password").value = password.password;
        document.getElementById("hint").innerText = generateEmoji(password.indices);
        generateBackgroundColor(password.indices);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("site").addEventListener("input", handleGeneratePassword);
    document.getElementById("cipher").addEventListener("input", handleGeneratePassword);
});
