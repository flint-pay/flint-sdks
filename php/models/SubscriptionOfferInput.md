[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOfferInput

Recurring terms offered on catalog products or variants. Updates affect new signups; existing subscriptions keep their paid signup terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | minItems: `1`. maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `product_ids` | Required | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. |
| `promotion_id` | Required | string or null | An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_delivery_method_ids` | Required | Array of string | Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: `25`. uniqueItems: `true`. |
| `subscription_offer_id` | Required | string |  |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `variant_ids` | Required | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. |
| `version` | Required | integer | Format: `uint64`. minimum: `0`. |

