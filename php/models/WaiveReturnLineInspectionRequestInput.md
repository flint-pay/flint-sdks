[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WaiveReturnLineInspectionRequestInput

The request body for: Waive return line inspection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional. The Return's current version, not the line's; a stale value returns 409 VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

