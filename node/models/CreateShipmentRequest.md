[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateShipmentRequest

The request body for: Create shipment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Conditional | string | Values: `"outbound"`, `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `return_id` | Conditional | string | minLength: `1`. |
| `return_line_items` | Conditional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | `return_line_items[]`: [field definitions](../models/BuyerPackage.md#buyerpackagereturn_line_items). |

### CreateShipmentRequest variant 1: `direction` = `"outbound"`

oneOf variant 1.

- Condition: not (at least one(present(`return_id`); present(`return_line_items`))).
- Optional: `direction`, `return_id`, `return_line_items`.
- Constraints for `direction`: Values: `"outbound"`.

### CreateShipmentRequest variant 2: `direction` = `"return"`

oneOf variant 2.

- Required: `direction`, `return_id`, `return_line_items`.
- Constraints for `direction`: Values: `"return"`.
- Constraints for `return_line_items`: minItems: `1`.

### CreateShipmentRequest variant 1.return_line_items[]

Field definitions: [BuyerPackage.return_line_items[]](../models/BuyerPackage.md#buyerpackagereturn_line_items).

