[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Device

A device registered to the merchant account by hardware fingerprint, optionally assigned to a location. Registering a device doesn't change how payments are accepted.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `device_id` | Required | string | Stable identifier of the device. |
| `hardware_fingerprint` | Optional | string | Identifier of the physical hardware, compared exactly. Only one active device can hold a fingerprint. Archiving the device releases it, so the field is omitted on archived devices and a new device can register the same hardware. |
| `location_id` | Optional | string | The Location the device is assigned to. Omitted when it has none. |
| `merchant_id` | Required | string | The merchant that owns the device. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Name you gave the device. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Starts at 1 and goes up with each update and on archive. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `1`. |

### Device.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

