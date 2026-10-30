[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnDispositionRequest

The request body for: Cancel return disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

