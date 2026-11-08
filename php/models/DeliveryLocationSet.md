[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSet

The locations available to a delivery method.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfiguration](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | Current member Locations and selection rules. The location IDs in a delivery location set. `configuration`: [field definitions](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedataconfiguration). |
| `created_at` | Required | string | Time the location set was created. Format: `date-time`. |
| `current_delivery_location_set_revision_id` | Required | string | Immutable revision used for new quotes. |
| `delivery_location_set_id` | Required | string | Stable delivery location set ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing location set name. |
| `status` | Required | string | Current location set lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the location set last changed. Format: `date-time`. |
| `version` | Required | integer | Optimistic-concurrency version for location set writes. Format: `uint64`. minimum: `1`. |

### DeliveryLocationSet.configuration fields 1

Field definitions: [DeliveryLocationSetResponse.data.configuration](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedataconfiguration).

### DeliveryLocationSet.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

