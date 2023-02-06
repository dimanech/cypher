# "Cypher machine" password generator/regenerator

The "Cypher machine" password generator/regenerator is a simple tool for creating and regenerating passwords. It operates by utilizing a cipher and a site name to generate a password.

---

The password generator works by utilizing a Unicode-based cipher and a site name to generate a password. The process of generating the password can be broken down into the following steps:

1. Creation of the cipher: A Unicode-based cipher is created that will be used as the basis for the password generation process. This cipher can be any string, but it is recommended that it be a passphrase.
2. Encryption of the site name: The site name is encrypted using the PBKDF2-HMAC(SHA-256) algorithm. PBKDF2-HMAC is a key derivation function that uses a password and a pseudorandom function (in this case, HMAC-SHA256) to derive a cryptographic key from a password.
3. Mapping to the RFC1924 character set: The result of the encryption is then mapped to the [RFC1924](https://www.rfc-editor.org/rfc/rfc1924) character set. This character set defines a set of printable characters that can be used in a password.
4. Generation of the password string: The final step is to generate a password string based on the mapped characters. This password string can then be used as the user's password for the given site.

This password generation approach doesn't require the storage of passwords in a vault, as the only information that needs to be kept is the cipher and the site name. Given these two pieces of information, the password can be regenerated at any time.

This tool inspired by [Password bookmarklet](https://github.com/dotcypress/password) and [Obliviate](https://github.com/elfenware/obliviate).

## How to use

CLI:

```bash
./bin/cypher.mjs 'correct horse battery staple' github.com
```
or you could set cipher as environment variable. In this case you do not need to pass it as argument.

```bash
CIPHER_MACHINE_CIPHER='correct horse battery staple' ./bin/cypher.mjs github.com
```

Web:

[https://dimanech.github.io/cypher/](https://dimanech.github.io/cypher/)

## License

Copyright © 2023, D. Nechepurenko. Published under GNU GPLv3 license.

## TODO

* Bash script that do same things in CLI
* password length option
* deviation option of iteration count
* add checkbox to not store cipher in local storage
