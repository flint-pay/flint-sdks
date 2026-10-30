[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CompleteReturnRequest

The request body for: Complete return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `reason` | Optional | string | Values: `"manual_completion"`, `"exception_waived"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

