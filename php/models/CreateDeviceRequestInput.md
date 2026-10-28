[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeviceRequestInput

The request body for: Create device.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `hardware_fingerprint` | Optional | string | Stable hardware identity. Must have no leading or trailing whitespace and is compared exactly, including case and accents. Only one active device in this merchant and environment can hold it. minLength: `1`. maxLength: `255`. |
| `location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |

