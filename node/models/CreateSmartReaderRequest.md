[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSmartReaderRequest

Registers a countertop reader with the pairing code it shows under Settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Optional | string | The register, kiosk or phone the reader takes payments for. Needs `accounts.devices.read` as well. When the device has a location, it must be the reader's. A device holds at most one active Tap to Pay reader. minLength: `1`. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `location_id` | Required | string | An active location with a complete US address (`line1`, `city`, `state`, `postal_code`, `country: US`). Stripe requires every reader to have one. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `name` | Required | string | Your label for the reader. minLength: `1`. maxLength: `255`. |
| `registration_code` | Required | string | The pairing code the reader shows under Settings. In a sandbox, `simulated-s700` registers a simulated Stripe Reader S700. Never returned. A code works once, so send an `Idempotency-Key` and retry with it. minLength: `1`. maxLength: `255`. |
| `type` | Required | string | `smart_reader`. Values: `"smart_reader"`. |

### CreateSmartReaderRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

