[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOffer

Recurring terms offered on catalog products or variants. Updates affect new signups; existing subscriptions keep their paid signup terms.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs. Every option bills the same catalog line prices once per period; changing cadence does not scale prices. minItems: `1`. maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `product_ids` | Required | Array of string | Products whose active variants the offer covers, including variants added later. At most 100. Send at least one product or variant. Each product must be active and physical, digital, or a service. A variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the other offer. maxItems: `100`. uniqueItems: `true`. |
| `promotion_id` | Required | string or null | An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. |
| `status` | Required | string | Whether new signups can use the offer. Existing subscriptions keep their signup terms whatever the offer's status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_delivery_method_ids` | Required | Array of string | Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: `25`. uniqueItems: `true`. |
| `subscription_offer_id` | Required | string | Unique identifier for this subscription offer, prefixed `soffer_`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `variant_ids` | Required | Array of string | Individual variants the offer covers. At most 100. Send at least one product or variant. A variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the other offer. maxItems: `100`. uniqueItems: `true`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `0`. |

### SubscriptionOffer.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

