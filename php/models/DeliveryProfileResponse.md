[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileResponse

A response containing `DeliveryProfile` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile) | Resource, collection, or operation result returned by this request. Reusable delivery rules assigned to catalog items. `data`: [field definitions](../models/DeliveryProfileResponse.md#deliveryprofileresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryProfileResponse.data

Resource, collection, or operation result returned by this request. Reusable delivery rules assigned to catalog items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfiguration](../models/DeliveryProfileConfiguration.md#deliveryprofileconfiguration) | Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, packing rules, weight, and dimensions. |
| `created_at` | Required | string | Time the profile was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_profile_revision_id` | Required | string | Immutable revision used for new line-item snapshots. Example: `"dprofr_01KEZF7C00K1P3FXGHCF46YQ1F"`. |
| `delivery_profile_id` | Required | string | Stable delivery profile ID. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `diagnostics` | Optional | [DeliveryProfileDiagnostics](../models/DeliveryProfileDiagnostics.md#deliveryprofilediagnostics) | Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `is_default` | Required | boolean | True only when this profile is the current physical catalog default. Response only. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing profile name. |
| `status` | Required | string | Current profile lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the profile last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for profile writes. Format: `uint64`. minimum: `1`. |

### DeliveryProfileResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryProfileResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

