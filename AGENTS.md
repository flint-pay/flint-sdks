# Repository guidance

This is a public repository. Never add, commit, or expose secrets, credentials,
tokens, API keys, private keys, passwords, or other sensitive configuration.
Use clearly fake placeholder values in examples and tests.

The Node.js/TypeScript and PHP SDKs are generated from Flint's pinned OpenAPI
contract. Do not hand-edit generated package files. Make SDK changes in
[`flint-pay/sdk-generator`](https://github.com/flint-pay/sdk-generator) and
regenerate this repository as described in [CONTRIBUTING.md](CONTRIBUTING.md).

Before submitting changes, run the narrowest relevant validation command. For
generated SDK updates, use the repository's generation and validation workflow
documented in [README.md](README.md).
