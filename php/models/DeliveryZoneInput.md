[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneInput

A geographic area served by a delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `created_at` | Required | string | Time the zone was created. Format: `date-time`. |
| `current_delivery_zone_revision_id` | Required | string | Immutable revision used for new quotes. |
| `delivery_zone_id` | Required | string | Stable delivery zone ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | Merchant-facing zone name. |
| `status` | Required | string | Current zone lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the zone last changed. Format: `date-time`. |
| `version` | Required | integer | Optimistic-concurrency version for zone writes. Format: `uint64`. minimum: `1`. |

