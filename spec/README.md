# Pinned SDK inputs

`openapi.json` is the complete, unmodified public API export from the upstream revision and path recorded in `../sdk.lock.json`. Its SHA-256 is checked before every generator invocation. All 497 operations and 189 incoming webhook declarations are retained.

The profiles and example corrections originated from `flint-pay/sdk-generator` revision `07a67ed170bc7941973348c25d114779cdcc3837`, `tests/providers/flint/full-*-sdk.json`. Package names, version, namespace, targets and release policy are Flint's production configuration in `profiles/full-common-sdk.json`. `../sdk.json` composes the six authentication profiles and supplies operation examples and stream/media declarations.

Unlike the earlier seven-operation fixture, these profiles do not remove webhook declarations or override schema constraints to make generation succeed. `schemaSharing: "named"` bounds graph expansion and `numericUnions: "explicit"` preserves ambiguous numeric/string input choices. The full specification remains unchanged.

`../tests/full-http-cases.json`, `full-model-cases.json`, and `full-inventory.json` are copied from that same generator revision. `../tests/provenance.json` records upstream fixture behavior sources and example corrections. These are synthetic contract regression cases, not live transaction certification.

To update the API, obtain a matching versioned public JSON export, record its exact upstream revision and SHA-256 in `sdk.lock.json`, and update the version header in the common profile. Review authentication bindings, operation inventory, examples and fixture expectations together. To update the generator, change its exact revision in the lock, run `npm run setup`, regenerate, and review the complete diff before release.
