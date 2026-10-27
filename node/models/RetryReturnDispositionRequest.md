[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryReturnDispositionRequest

The request body for: Retry return disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"dependency_recovered"`, `"mapping_corrected"`, `"operator_retry"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

