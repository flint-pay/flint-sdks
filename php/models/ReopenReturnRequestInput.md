[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReopenReturnRequestInput

The request body for: Reopen return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"linked_effect_changed"`, `"correction_required"`, `"additional_merchandise_received"`, `"merchant_request"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

