[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryProfile

The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfiguration](../models/DeliveryProfileConfiguration.md#deliveryprofileconfiguration) | Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, and grouping and splitting rules. |
| `created_at` | Required | string | Time the profile was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_profile_revision_id` | Required | string | Immutable revision used for new line-item snapshots. Example: `"dprofr_01KEZF7C00K1P3FXGHCF46YQ1F"`. |
| `delivery_profile_id` | Required | string | Stable delivery profile ID. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `is_default` | Required | boolean | True only when this profile is the current physical catalog default. Response only. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryLocationSet.md#deliverylocationsetmetadata). |
| `name` | Required | string | Merchant-facing profile name. |
| `status` | Required | string | Current profile lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the profile last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for profile writes. Format: `uint64`. minimum: `1`. |

### WebhookDeliveryProfile.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

