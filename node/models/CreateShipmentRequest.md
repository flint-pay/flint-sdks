[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateShipmentRequest

The request body for: Create shipment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Required | string | Values: `"outbound"`, `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `packages` | Optional | Array of [PackageCreateRequest](../models/PackageCreateRequest.md#packagecreaterequest) | Creates packages atomically with an outbound shipment. Items are optional per package. Created packages are included in the response. minItems: `1`. maxItems: `20`. |
| `return_id` | Conditional | string | minLength: `1`. |
| `return_line_items` | Conditional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | minItems: `1`. `return_line_items[]`: [field definitions](../models/CreateShipmentRequest.md#createshipmentrequestreturn_line_items). |

### CreateShipmentRequest variant 1: `direction` = `"outbound"`

oneOf variant 1: The `outbound` variant of `CreateShipmentRequest`..

- Condition: not (present(`return_id`)).
- Condition: not (present(`return_line_items`)).
- Optional: `return_id`, `return_line_items`.
- Constraints for `direction`: Values: `"outbound"`.

### CreateShipmentRequest variant 2: `direction` = `"return"`

oneOf variant 2: The `return` variant of `CreateShipmentRequest`..

- Condition: not (present(`packages`)).
- Required: `return_id`, `return_line_items`.
- Constraints for `direction`: Values: `"return"`.

### CreateShipmentRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateShipmentRequest.return_line_items[]

A return line and the quantity placed in a return shipment or package.

Field definitions: [shared fields](ReturnShipmentLineItemAllocationRequestRequestInput.md#returnshipmentlineitemallocationrequestrequestinput).

