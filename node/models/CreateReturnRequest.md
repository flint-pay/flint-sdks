[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnRequest

The request body for: Create return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnLineItemRequest](../models/ReturnLineItemRequest.md#returnlineitemrequest) | minItems: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `order_id` | Required | string | minLength: `1`. |

