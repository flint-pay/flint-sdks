[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateLocationRequest

The request body for: Create location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequest](../models/AddressRequest.md#addressrequest) | Postal address of the Location. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | Latitude and longitude of the Location. Send it with `coordinate_source`. A latitude and longitude for a merchant location. `coordinate`: [field definitions](../models/CreateLocationRequest.md#createlocationrequestcoordinate). |
| `coordinate_source` | Optional | string or null | Where `coordinate` came from: `merchant_supplied` if you chose or measured it, `geocoded` if you got it by geocoding the address. Send it with `coordinate`: it is required when `coordinate` is present and rejected when `coordinate` is absent. `null` counts as omitted, so it is accepted only when `coordinate` is also omitted. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory.allocation.write in addition to the route scope. Default: `false`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `name` | Required | string | Merchant-facing Location name, from 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Status the Location starts in. Defaults to `active`. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA time zone for the Location's local schedules, such as `America/New_York`. Defaults to the merchant's timezone, then UTC, and is saved on the Location at creation. minLength: `1`. |

### CreateLocationRequest.coordinate

Latitude and longitude of the Location. Send it with `coordinate_source`. A latitude and longitude for a merchant location.

Field definitions: [shared fields](LocationCoordinateRequestInput.md#locationcoordinaterequestinput).

### CreateLocationRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

