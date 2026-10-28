[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfile

Reusable delivery rules assigned to catalog items.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfiguration](../models/DeliveryProfileConfiguration.md#deliveryprofileconfiguration) | Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, packing rules, weight, and dimensions. |
| `created_at` | Required | string | Time the profile was created. Format: `date-time`. |
| `current_delivery_profile_revision_id` | Required | string | Immutable revision used for new line-item snapshots. |
| `delivery_profile_id` | Required | string | Stable delivery profile ID. |
| `diagnostics` | Optional | [DeliveryProfileDiagnostics](../models/DeliveryProfileDiagnostics.md#deliveryprofilediagnostics) | Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `is_default` | Required | boolean | True only when this profile is the current physical catalog default. Response only. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryLocationSet.md#deliverylocationsetmetadata). |
| `name` | Required | string | Merchant-facing profile name. |
| `status` | Required | string | Current profile lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the profile last changed. Format: `date-time`. |
| `version` | Required | integer string | Optimistic-concurrency version for profile writes. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### DeliveryProfile.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

