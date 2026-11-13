[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfile

Reusable delivery rules assigned to catalog items.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfiguration](../models/DeliveryProfileConfiguration.md#deliveryprofileconfiguration) | Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, and grouping and splitting rules. |
| `created_at` | Required | string | Time the profile was created. Format: `date-time`. |
| `current_delivery_profile_revision_id` | Required | string | Immutable revision used for new line-item snapshots. |
| `delivery_profile_id` | Required | string | Stable delivery profile ID. |
| `diagnostics` | Optional | [DeliveryProfileDiagnostics](../models/DeliveryProfileDiagnostics.md#deliveryprofilediagnostics) | Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `is_default` | Required | boolean | True only when this profile is the current physical catalog default. Response only. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing profile name. |
| `status` | Required | string | Current profile lifecycle status. Values: `"active"`, `"archived"`. |
| `unconfigured_assignment` | Optional | [DeliveryProfileUnconfiguredAssignment](../models/DeliveryProfileUnconfiguredAssignment.md#deliveryprofileunconfiguredassignment) or null | Progress of the profile's latest bulk assignment through `POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile has never had one. Omitted when the response is a write response or a webhook object; retrieve and list responses include it. Flint updates it as the assignment's runs commit, without changing the profile's `version` or sending `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items it assigned. |
| `updated_at` | Required | string | Time the profile last changed. Format: `date-time`. |
| `version` | Required | integer | Optimistic-concurrency version for profile writes. Format: `uint64`. minimum: `1`. |

### DeliveryProfile.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

