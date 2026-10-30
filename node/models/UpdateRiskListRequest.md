[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateRiskListRequest

The request body for: Update a risk list.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `name` | Required | string | Name of a merchant-created risk list. It can't be cleared. minLength: `1`. |

