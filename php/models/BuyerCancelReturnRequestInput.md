[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCancelReturnRequestInput

Withdraw a requested Return belonging to the current buyer. An omitted reason defaults to buyer_request.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `reason` | Optional | string | The buyer withdrew the Return request. Defaults to buyer_request when omitted. Default: `"buyer_request"`. Values: `"buyer_request"`. |
| `reason_message` | Optional | string | Optional detail about why the buyer withdrew the Return. minLength: `1`. |

