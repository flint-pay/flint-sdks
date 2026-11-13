[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryProfileRequestInput

The request body for: Update delivery profile.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryProfileConfigurationRequestInput](../models/DeliveryProfileConfigurationRequestInput.md#deliveryprofileconfigurationrequestinput) | Replaced as a whole: send every field you want to keep. Send the whole profile configuration; leave configuration out to keep it. requirement none allows no other keys, and quote profiles require origin_policy, combination_policy, and splitting_policy. Null and an empty object are invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `is_default` | Conditional | boolean | Send true to make this active profile the physical catalog default. Can be combined with other mutable fields in one atomic update. Send expected_version to fence the update against this profile's current version. Sending only is_default true for the current default is a no-op: its version stays unchanged and no events are emitted. False is invalid; make another profile the default instead. Values: `true`. |
| `metadata` | Conditional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Conditional | string | Merchant-facing name. minLength: `1`. |

### UpdateDeliveryProfileRequestInput variant 1: `is_default` = `true`

anyOf variant 1.

- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `is_default`, `metadata`.

### UpdateDeliveryProfileRequestInput variant 2: `is_default` = `true`

anyOf variant 2.

- Required: `external_reference_id`.
- Optional: `configuration`, `is_default`, `metadata`, `name`.

### UpdateDeliveryProfileRequestInput variant 3: `is_default` = `true`

anyOf variant 3.

- Required: `configuration`.
- Optional: `external_reference_id`, `is_default`, `metadata`, `name`.

### UpdateDeliveryProfileRequestInput variant 4: `is_default` = `true`

anyOf variant 4.

- Required: `metadata`.
- Optional: `configuration`, `external_reference_id`, `is_default`, `name`.

### UpdateDeliveryProfileRequestInput variant 5: `is_default` = `true`

anyOf variant 5.

- Required: `is_default`.
- Optional: `configuration`, `external_reference_id`, `metadata`, `name`.

