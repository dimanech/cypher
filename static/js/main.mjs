import pbkdf2Hmac from './libs/pkdf2Hmac.js';
import generatePassword from "./password-generator.mjs";
import generateEmoji from "./emoji-generator.mjs";
import generateBackgroundColor from "./background-generator.mjs";

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
