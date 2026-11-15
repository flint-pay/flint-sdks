[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectionSessionClientSessionInput

Stripe Terminal SDK inputs for one connection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [ReaderConnectionSessionStripeInput](../models/ReaderConnectionSessionStripeInput.md#readerconnectionsessionstripeinput) | Inputs for the Stripe Terminal SDK. Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id` to `TapToPayConnectionConfiguration`. |

