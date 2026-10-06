# Pinned SDK inputs

`openapi.json` is the complete, unmodified public API export from the upstream revision and path recorded in `../sdk.lock.json`. Its SHA-256 is checked before every generator invocation. All 546 operations and 202 incoming webhook declarations are retained. The generated packages select 542 operations; four form-only CLI OAuth operations are outside the generator's supported request formats.

The profiles and example corrections originated from `flint-pay/sdk-generator` revision `bbb5101164bcaa188aaf890e2e9e0b43cafcfdad`, `tests/providers/flint/full-*-sdk.json`. Package names, version, namespace, targets and release policy are Flint's production configuration in `profiles/full-common-sdk.json`. `../sdk.json` composes the six authentication profiles and supplies operation examples and stream/media declarations.

Unlike the earlier seven-operation fixture, these profiles do not remove webhook declarations or override schema constraints to make generation succeed. `schemaSharing: "named"` bounds graph expansion and `numericUnions: "explicit"` preserves ambiguous numeric/string input choices. The full specification remains unchanged.

`../tests/full-http-cases.json`, `full-model-cases.json`, and `full-inventory.json` are copied from that same generator revision. `../tests/provenance.json` records upstream fixture behavior sources and example corrections. These are synthetic contract regression cases, not live transaction certification.

To update the API, obtain a matching versioned public JSON export, record its exact upstream revision and SHA-256 in `sdk.lock.json`, and update the version header in the common profile. Review authentication bindings, operation inventory, examples and fixture expectations together. To update the generator, change its exact revision in the lock, run `npm run setup`, regenerate, and review the complete diff before release.
