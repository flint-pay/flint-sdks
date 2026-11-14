[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectionSessionClientSession

Stripe Terminal SDK inputs for one connection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [ReaderConnectionSessionStripe](../models/ReaderConnectionSessionStripe.md#readerconnectionsessionstripe) | Inputs for the Stripe Terminal SDK. Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id` to `TapToPayConnectionConfiguration`. |

