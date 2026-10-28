[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionOfferRequest

The request body for: Update subscription offer. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. maxItems: `12`. uniqueItems: `true`. |
| `expected_version` | Optional | integer string | The version read before editing. A mismatch returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omission leaves this field unchanged. Null clears it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `product_ids` | Optional | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |
| `promotion_id` | Optional | string or null | An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. minLength: `1`. |
| `status` | Optional | string | Use active or inactive. Archive the offer with DELETE. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `variant_ids` | Optional | Array of string | Catalog targets for new signups. At least one product or variant is required. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. |

