[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnDispositionRequest

The request body for: Cancel return disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

