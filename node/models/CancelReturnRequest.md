[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnRequest

Declared schema CancelReturnRequest: The request body for: Cancel one of the current buyer's Returns; Cancel return.

Declared schema CancelReturnResolutionRequest: The request body for: Cancel return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

