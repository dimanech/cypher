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
    const site = document.getElementById("site").value;
    const cipher = document.getElementById("cipher").value;

    if (site.length > 0) {
        var password = await generatePassword(pbkdf2Hmac, cipher, site);
        document.getElementById("password").value = password.password;
        document.getElementById("hint").innerText = generateEmoji(password.indices);
        generateBackgroundColor(password.indices);
    }
}

function storeForm() {
    const cipher = document.getElementById("cipher").value;
    localStorage.setItem("cipher", cipher);
}

function restoreForm() {
    const cipher = localStorage.getItem("cipher");
    if (!cipher) {
        return;
    }
    document.getElementById("cipher").value = cipher;
}

document.addEventListener("DOMContentLoaded", function () {
    restoreForm();
    document.getElementById("site").addEventListener("input", handleGeneratePassword);
    document.getElementById("cipher").addEventListener("input", handleGeneratePassword);
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        storeForm();
    }

    if (document.visibilityState === 'visible') {
        restoreForm();
    }
});
