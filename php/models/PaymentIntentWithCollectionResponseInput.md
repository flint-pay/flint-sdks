[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentWithCollectionResponseInput

A response containing `PaymentIntentWithCollection` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentIntentWithCollectionInput](../models/PaymentIntentWithCollectionInput.md#paymentintentwithcollectioninput) | One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money always equals the sum of those three. Reconcile revenue from captured_money. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

