[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryProfileRequest

The request body for: Update delivery profile.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryProfileConfigurationRequest](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Send the whole profile configuration. It replaces the current one; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `is_default` | Conditional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Conditional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Conditional | string | minLength: `1`. |

### UpdateDeliveryProfileRequest variant 1: `is_default` = `true`

anyOf variant 1.

- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `is_default`, `metadata`.

### UpdateDeliveryProfileRequest variant 2: `is_default` = `true`

anyOf variant 2.

- Required: `external_reference_id`.
- Optional: `configuration`, `is_default`, `metadata`, `name`.

### UpdateDeliveryProfileRequest variant 3: `is_default` = `true`

anyOf variant 3.

- Required: `configuration`.
- Optional: `external_reference_id`, `is_default`, `metadata`, `name`.

### UpdateDeliveryProfileRequest variant 4: `is_default` = `true`

anyOf variant 4.

- Required: `metadata`.
- Optional: `configuration`, `external_reference_id`, `is_default`, `name`.

### UpdateDeliveryProfileRequest variant 5: `is_default` = `true`

anyOf variant 5.

- Required: `is_default`.
- Optional: `configuration`, `external_reference_id`, `metadata`, `name`.

