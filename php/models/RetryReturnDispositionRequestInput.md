[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryReturnDispositionRequestInput

The request body for: Retry return disposition.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the disposition is being run again. Values: `"dependency_recovered"`, `"mapping_corrected"`, `"operator_retry"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |

