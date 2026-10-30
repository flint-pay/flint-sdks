[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethod

A configured shipping, pickup, local delivery, or service option.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfiguration](../models/DeliveryMethodConfiguration.md#deliverymethodconfiguration) | Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes. |
| `created_at` | Required | string | Time the method was created. Format: `date-time`. |
| `current_delivery_method_revision_id` | Required | string | Immutable revision currently used for new quotes. |
| `delivery_method_id` | Required | string | Stable delivery method ID. |
| `description` | Optional | string | Optional buyer-facing description. |
| `display_position` | Required | integer | Ascending display order among methods. Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryLocationSet.md#deliverylocationsetmetadata). |
| `name` | Required | string | Merchant-facing method name. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Required | string | Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `type` | Required | string | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |
| `updated_at` | Required | string | Time the method last changed. Format: `date-time`. |
| `version` | Required | integer | Optimistic-concurrency version for method writes. Format: `uint64`. minimum: `1`. |

### DeliveryMethod.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

