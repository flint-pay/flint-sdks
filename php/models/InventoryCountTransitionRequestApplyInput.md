[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountTransitionRequestApplyInput

The `apply` variant of `InventoryCountTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"apply"`. |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |

