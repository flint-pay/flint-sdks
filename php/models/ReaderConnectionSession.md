[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectionSession

A Tap to Pay connection session: a fresh single-use Stripe Terminal connection token for the reader's location, returned only in the response that creates it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [ReaderConnectionSessionClientSession](../models/ReaderConnectionSessionClientSession.md#readerconnectionsessionclientsession) | What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in lists or in webhooks. Stripe Terminal SDK inputs for one connection. |
| `location_id` | Required | string | The reader's Flint location. |
| `reader_id` | Required | string | The Tap to Pay reader the session is for. |

