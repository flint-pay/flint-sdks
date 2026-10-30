[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnRequestInput

The request body for: Cancel one of the current buyer's Returns; Cancel return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

