[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountTransitionRequest

The request body for: Transition inventory count.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string |  |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### InventoryCountTransitionRequest variant 1: `action` = `"apply"`

oneOf variant 1: The `apply` variant of `InventoryCountTransitionRequest`..

- Constraints for `action`: Values: `"apply"`.

### InventoryCountTransitionRequest variant 2: `action` = `"cancel"`

oneOf variant 2: The `cancel` variant of `InventoryCountTransitionRequest`..

- Constraints for `action`: Values: `"cancel"`.

