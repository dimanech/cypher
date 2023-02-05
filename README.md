# "Enigma machine" password generator

This is a simple password generator/"manager" that use cipher and site name to generate a password.

The concept behind this generator is pretty simple. You create unicode based cipher and then encrypt any string (in our case it is site name), then we map the result to [RFC1924](https://www.rfc-editor.org/rfc/rfc1924) character set. As the result you have password string.

This approach do not require any valut to store your passwords. The only thing that you need is to remember 1) your cipher and 2) site name. The tool will generate same password based on this any time you need it in any device.

This tool inspired by [Password bookmarklet](https://github.com/dotcypress/password) and [Obliviate](https://github.com/elfenware/obliviate).

## How to use

CLI:

```bash
node ./bin/enigma.mjs 'correct horse battery staple' github.com
```
or you could set cipher as environment variable. In this case you do not need to pass it as argument.

```bash
ENIGMA_CIPHER='correct horse battery staple' node ./bin/enigma.mjs github.com
```

Web:


## License

Copyright © 2023, D. Nechepurenko. Published under GNU GPLv3 license.

## TODO

Bash script that do same things in CLI
