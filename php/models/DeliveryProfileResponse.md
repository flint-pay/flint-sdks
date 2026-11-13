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
| `configuration` | Required | [DeliveryProfileConfiguration](../models/DeliveryProfileConfiguration.md#deliveryprofileconfiguration) | Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, and grouping and splitting rules. |
| `created_at` | Required | string | Time the profile was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_profile_revision_id` | Required | string | Immutable revision used for new line-item snapshots. Example: `"dprofr_01KEZF7C00K1P3FXGHCF46YQ1F"`. |
| `delivery_profile_id` | Required | string | Stable delivery profile ID. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `diagnostics` | Optional | [DeliveryProfileDiagnostics](../models/DeliveryProfileDiagnostics.md#deliveryprofilediagnostics) | Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `is_default` | Required | boolean | True only when this profile is the current physical catalog default. Response only. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing profile name. |
| `status` | Required | string | Current profile lifecycle status. Values: `"active"`, `"archived"`. |
| `unconfigured_assignment` | Optional | [DeliveryProfileUnconfiguredAssignment](../models/DeliveryProfileUnconfiguredAssignment.md#deliveryprofileunconfiguredassignment) or null | Progress of the profile's latest bulk assignment through `POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile has never had one. Omitted when the response is a write response or a webhook object; retrieve and list responses include it. Flint updates it as the assignment's runs commit, without changing the profile's `version` or sending `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items it assigned. `unconfigured_assignment`: [declared alternatives](../models/DeliveryProfileResponse.md#deliveryprofileresponsedataunconfigured_assignment). |
| `updated_at` | Required | string | Time the profile last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for profile writes. Format: `uint64`. minimum: `1`. |

### DeliveryProfileResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryProfileResponse.data.unconfigured_assignment

Progress of the profile's latest bulk assignment through `POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile has never had one. Omitted when the response is a write response or a webhook object; retrieve and list responses include it. Flint updates it as the assignment's runs commit, without changing the profile's `version` or sending `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items it assigned.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Conditional | string | Time Flint accepted the assignment request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `bundle_components_remaining` | Conditional | integer | About how many bundle components the assignment hasn't reached yet, starting from those without a delivery profile when Flint accepted the request. Flint updates it between runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is `completed`. Format: `int64`. minimum: `0`. |
| `cancellation_reason` | Conditional | string | Why the assignment was canceled. Omitted when `status` isn't `canceled`. Values: `"superseded"`, `"delivery_profile_archived"`. |
| `completed_at` | Conditional | string | Time the assignment reached `completed`, `canceled`, or `failed`. Omitted when `status` is `processing`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `failure_reason` | Conditional | string | Why the assignment failed. Omitted when `status` isn't `failed`. Values: `"assignment_failed"`. |
| `product_variants_remaining` | Conditional | integer | About how many physical product variants the assignment hasn't reached yet, starting from those without a delivery profile when Flint accepted the request. Flint updates it between runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is `completed`. Format: `int64`. minimum: `0`. |
| `status` | Conditional | string | Progress of the assignment. Poll the profile until it is no longer `processing`. Values: `"processing"`, `"completed"`, `"canceled"`, `"failed"`. |

### DeliveryProfileResponse.data.unconfigured_assignment variant 1: `failure_reason` = `"assignment_failed"`

anyOf DeliveryProfileUnconfiguredAssignment: Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it..

- Required: `accepted_at`, `bundle_components_remaining`, `product_variants_remaining`, `status`.
- Optional: `cancellation_reason`, `completed_at`, `failure_reason`.

### DeliveryProfileResponse.data.unconfigured_assignment variant 2

anyOf variant 2.

- Undeclared: `accepted_at`, `bundle_components_remaining`, `cancellation_reason`, `completed_at`, `failure_reason`, `product_variants_remaining`, `status`.
- Value shape: null. Progress of the profile's latest bulk assignment through `POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile has never had one. Omitted when the response is a write response or a webhook object; retrieve and list responses include it. Flint updates it as the assignment's runs commit, without changing the profile's `version` or sending `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items it assigned. 

### DeliveryProfileResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

