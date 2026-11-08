[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeviceResponse

A response containing `Device` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Device](../models/Device.md#device) | Resource, collection, or operation result returned by this request. A device registered to the merchant account by hardware fingerprint, optionally assigned to a location. Registering a device doesn't change how payments are accepted. `data`: [field definitions](../models/DeviceResponse.md#deviceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeviceResponse.data

Resource, collection, or operation result returned by this request. A device registered to the merchant account by hardware fingerprint, optionally assigned to a location. Registering a device doesn't change how payments are accepted.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `device_id` | Required | string | Stable identifier of the device. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `hardware_fingerprint` | Optional | string | Identifier of the physical hardware, compared exactly. Only one active device can hold a fingerprint. Archiving the device releases it, so the field is omitted on archived devices and a new device can register the same hardware. |
| `location_id` | Optional | string | The Location the device is assigned to. Omitted when it has none. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `merchant_id` | Required | string | The merchant that owns the device. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Name you gave the device. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Starts at 1 and goes up with each update and on archive. Send it as `expected_version` to apply an update only if nothing changed. Format: `uint64`. minimum: `1`. |

### DeviceResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### DeviceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

