[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnRequest

Declared schema CancelReturnRequest: The request body for: Cancel return.

Declared schema CancelReturnResolutionRequest: The request body for: Cancel return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why it is being canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |

