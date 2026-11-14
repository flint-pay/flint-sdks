[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementLineItem







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_id` | Required | string | Return that owns return_line_item_id. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_item_id` | Required | string | Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

### ReturnHandoffRequirementLineItem variant 1

anyOf variant 1: Declared schema ReturnHandoffRequirementLineItem. A return line and the quantity the buyer must hand back..

- Constraints for `return_line_item_id`: ID of the Return line the entry is about.

### ReturnHandoffRequirementLineItem variant 2

anyOf variant 2: Declared schema ReturnShipmentLineItemAllocation. A return line and the quantity placed in a return shipment or package..

- Constraints for `return_line_item_id`: Return line whose quantity is allocated to the shipment or package. minLength: `1`.

