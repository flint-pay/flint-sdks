[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionOfferRequest

The request body for: Create subscription offer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs. Every option bills the same catalog line prices once per period; changing cadence does not scale prices. minItems: `1`. maxItems: `12`. uniqueItems: `true`. `billing_interval_options[]`: [field definitions](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequestbilling_interval_options). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `product_ids` | Optional | Array of string | Products whose active variants the offer covers, including variants added later. At most 100. Send at least one product or variant. Each product must be active and physical, digital, or a service. A variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the other offer. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `promotion_id` | Optional | string or null | An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it. minLength: `1`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `status` | Optional | string | Use active or inactive. Archive the offer with DELETE. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `variant_ids` | Optional | Array of string | Individual variants the offer covers. At most 100. Send at least one product or variant. A variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the other offer. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateSubscriptionOfferRequest.billing_interval_options[]

A billing cadence offered by a subscription plan or offer. Every option bills the same line prices once per period; prices are not scaled by the interval. For a different price per interval, create separate plans.

Field definitions: [shared fields](SubscriptionIntervalOption.md#subscriptionintervaloption).

### CreateSubscriptionOfferRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

