# Migrating from @flintpay/node 0.1.0

The generated 0.2 beta is an intentional breaking upgrade. It is initially published under npm's `next` tag. Keep using 0.1.0 until you have migrated and tested your integration.

- Node.js 22+ replaces Node.js 18+. The new package ships ESM; CommonJS `require()` is no longer an advertised export.
- Import `Client` instead of `Flint`. Supply `baseUrl`, named `credentials`, and `authMode`; the client does not read environment variables automatically.
- Operations use `client.api.<OpenAPI operationId>`, for example `client.api.getPaymentIntent({ payment_intent_id })`.
- Inputs use the public API's wire field names. JSON request bodies are nested under `body`; path/query parameters are sibling input properties.
- Results expose `data`, `meta`, and raw response access. Update code expecting the previous response shape.
- Exact integers/decimals use strings. Ambiguous numeric/string unions use explicit numeric wrappers. Follow generated input types instead of converting money to JavaScript floating point.
- The clients send `Flint-Version: 2026-09-07`. Review API-version changes as well as SDK-interface changes.
- Authentication modes distinguish merchant keys, customer sessions, onboarding, checkout credential pairs, and invoice tokens. A mode must be applicable to the operation.
- Retry and pagination helpers only exist where the SDK profile declares them. Do not assume the old SDK's helper behavior carries over.

Compare your production call sites against the generated reference and run your payment, refund, checkout, and webhook flows against a sandbox before upgrading. The generator's compatibility baseline does not describe the old handwritten SDK.
