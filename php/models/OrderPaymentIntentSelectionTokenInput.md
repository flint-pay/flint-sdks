[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionTokenInput

The `token` variant of `OrderPaymentIntentSelection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"token"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `token` | Required | string | Opaque processor or browser payment source token. minLength: `1`. |

