[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectionSessionInput

A Tap to Pay connection session: a fresh single-use Stripe Terminal connection token for the reader's location, returned only in the response that creates it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [ReaderConnectionSessionClientSessionInput](../models/ReaderConnectionSessionClientSessionInput.md#readerconnectionsessionclientsessioninput) | What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in lists or in webhooks. Stripe Terminal SDK inputs for one connection. |
| `location_id` | Required | string | The reader's Flint location. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `reader_id` | Required | string | The Tap to Pay reader the session is for. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |

