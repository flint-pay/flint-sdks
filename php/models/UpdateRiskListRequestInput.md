[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateRiskListRequestInput

The request body for: Update a risk list.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Required | string | Name of a merchant-created risk list. It can't be cleared. minLength: `1`. |

