[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectionSessionStripe

Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id` to `TapToPayConnectionConfiguration`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `connection_token` | Required | string | Single-use Stripe Terminal connection token, scoped to the reader's Stripe location. Create another session when the SDK asks for a new token. minLength: `1`. |
| `location_id` | Required | string | The Stripe Terminal location ID the SDK's Tap to Pay connection requires. This is a Stripe ID, not a Flint location ID. |

