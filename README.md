# "Cypher machine" password generator/regenerator

This is a simple password generator/regenerator that use cipher and site name to generate a password.

The concept behind this generator is pretty simple. You create unicode based cipher and then encrypt any string (in our case it is site name) with PBKDF2-HMAC(SHA-256) algorithm, then result mapped to [RFC1924](https://www.rfc-editor.org/rfc/rfc1924) character set. The final result is password string.

This approach for password management do not require any vault to store passwords. The only thing that you to keep is **cipher** and **site name**. The tool will regenerate same password based on this 2 things.

This tool inspired by [Password bookmarklet](https://github.com/dotcypress/password) and [Obliviate](https://github.com/elfenware/obliviate).

## How to use

CLI:

```bash
node ./bin/cypher.mjs 'correct horse battery staple' github.com
```
or you could set cipher as environment variable. In this case you do not need to pass it as argument.

```bash
ENIGMA_CIPHER='correct horse battery staple' node ./bin/cypher.mjs github.com
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
