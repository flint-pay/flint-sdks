[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderEditRequestInput

Cancel a pending order edit.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The order edit version to cancel. A mismatch returns VERSION_CONFLICT before changes. Format: `uint64`. minimum: `1`. |

