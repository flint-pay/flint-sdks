[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReopenReturnRequestInput

The request body for: Reopen return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the Return is being reopened. Values: `"linked_effect_changed"`, `"correction_required"`, `"additional_merchandise_received"`, `"merchant_request"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |

