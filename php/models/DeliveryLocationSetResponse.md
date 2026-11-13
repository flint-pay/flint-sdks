[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetResponse

A response containing `DeliveryLocationSet` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset) | Resource, collection, or operation result returned by this request. The locations available to a delivery method. `data`: [field definitions](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryLocationSetResponse.data

Resource, collection, or operation result returned by this request. The locations available to a delivery method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfiguration](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | Current member Locations. The location IDs in a delivery location set. `configuration`: [field definitions](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedataconfiguration). |
| `created_at` | Required | string | Time the location set was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_location_set_revision_id` | Required | string | Immutable revision used for new quotes. Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. |
| `delivery_location_set_id` | Required | string | Stable delivery location set ID. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing location set name. |
| `status` | Required | string | Current location set lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the location set last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for location set writes. Format: `uint64`. minimum: `1`. |

### DeliveryLocationSetResponse.data.configuration

Current member Locations. The location IDs in a delivery location set.

Field definitions: [shared fields](DeliveryLocationSetConfigurationInput.md#deliverylocationsetconfigurationinput).

### DeliveryLocationSetResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryLocationSetResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

