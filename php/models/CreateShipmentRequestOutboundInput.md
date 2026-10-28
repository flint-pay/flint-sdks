[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateShipmentRequestOutboundInput

The `outbound` variant of `CreateShipmentRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `direction` | Required | string | Values: `"outbound"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `packages` | Optional | Array of [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | Creates packages atomically with an outbound shipment. Items are optional per package. Created packages are included in the response. minItems: `1`. maxItems: `20`. |
| `return_id` | Optional | string | minLength: `1`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationRequestRequestInput](../models/ReturnShipmentLineItemAllocationRequestRequestInput.md#returnshipmentlineitemallocationrequestrequestinput) | minItems: `1`. |

