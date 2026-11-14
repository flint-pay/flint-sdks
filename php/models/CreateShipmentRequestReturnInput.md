[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateShipmentRequestReturnInput

The `return` variant of `CreateShipmentRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Required | string | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `fulfillment_id` | Optional | string | Shipment fulfillment that owns an outbound shipment. Required when direction is outbound; forbidden when direction is return. minLength: `1`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `packages` | Optional | Array of [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | Creates packages atomically with an outbound shipment. Items are optional per package. Created packages are included in the response. minItems: `1`. maxItems: `20`. |
| `return_id` | Required | string | Return associated with this shipment, when its direction is return. minLength: `1`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_items` | Required | Array of [ReturnShipmentLineItemAllocationRequestInput](../models/ReturnShipmentLineItemAllocationRequestInput.md#returnshipmentlineitemallocationrequestinput) | Return lines and quantities the shipment carries. minItems: `1`. |

