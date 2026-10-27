[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountTransitionRequestApplyInput

The `apply` variant of `InventoryCountTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"apply"`. |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

