[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReopenReturnRequest

The request body for: Reopen return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"linked_effect_changed"`, `"correction_required"`, `"additional_merchandise_received"`, `"merchant_request"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

