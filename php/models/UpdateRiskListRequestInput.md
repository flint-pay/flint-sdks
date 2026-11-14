[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateRiskListRequestInput

The request body for: Update a risk list.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `name` | Required | string | Name of a merchant-created risk list. It can't be cleared. minLength: `1`. |

