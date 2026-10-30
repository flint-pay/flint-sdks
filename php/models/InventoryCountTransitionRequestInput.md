[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountTransitionRequestInput

The request body for: Transition inventory count.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string |  |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |

### InventoryCountTransitionRequestInput variant 1: `action` = `"apply"`

oneOf with action: "apply": The `apply` variant of `InventoryCountTransitionRequest`..

- Constraints for `action`: Values: `"apply"`.

### InventoryCountTransitionRequestInput variant 2: `action` = `"cancel"`

oneOf with action: "cancel": The `cancel` variant of `InventoryCountTransitionRequest`..

- Constraints for `action`: Values: `"cancel"`.

