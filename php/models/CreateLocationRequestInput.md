[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateLocationRequestInput

The request body for: Create location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `coordinate` | Optional | [LocationCoordinateRequestInput](../models/LocationCoordinateRequestInput.md#locationcoordinaterequestinput) | A latitude and longitude for a merchant location. |
| `coordinate_source` | Optional | string or null | Send null to clear it. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory.allocation.write in addition to the route scope. Default: `false`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Required | string | minLength: `1`. |

