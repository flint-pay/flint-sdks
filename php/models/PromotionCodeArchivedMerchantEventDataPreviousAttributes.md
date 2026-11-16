[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean or null | Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. `available`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesavailable). |
| `code` | Optional | string or null | Code a buyer enters to redeem the promotion. `code`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributescode). |
| `created_at` | Optional | string or null | When the promotion code was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributescreated_at). |
| `customer_id` | Optional | string or null or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. `customer_id`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributescustomer_id). |
| `expires_at` | Optional | string or null | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. `expires_at`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesexpires_at). |
| `max_uses` | Optional | integer or null | Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. `max_uses`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesmax_uses). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion code. `merchant_id`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Key-value data you attach to the promotion code. `metadata`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesmetadata). |
| `promotion_code_id` | Optional | string or null | Unique identifier for the promotion code. `promotion_code_id`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributespromotion_code_id). |
| `promotion_id` | Optional | string or null | Identifier of the promotion this code redeems. `promotion_id`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributespromotion_id). |
| `status` | Optional | string or null | Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesstatus). |
| `timezone` | Optional | string or null | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. `timezone`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributestimezone). |
| `unavailable_reason` | Optional | string or null | Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. `unavailable_reason`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesunavailable_reason). |
| `updated_at` | Optional | string or null | When the promotion code was last updated, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesupdated_at). |
| `uses_count` | Optional | integer or null | Number of times this code has been redeemed. `uses_count`: [declared alternatives](../models/PromotionCodeArchivedMerchantEventDataPreviousAttributes.md#promotioncodearchivedmerchanteventdatapreviousattributesuses_count). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion). |

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.available

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.available variant 1

anyOf variant 1: Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available..

- Value shape: boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.available variant 2

anyOf variant 2.

- Value shape: null. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.code

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.code variant 1

anyOf variant 1: Code a buyer enters to redeem the promotion..

- Value shape: string. Code a buyer enters to redeem the promotion. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Code a buyer enters to redeem the promotion. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.created_at

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the promotion code was created, as an RFC3339 timestamp..

- Value shape: string. When the promotion code was created, as an RFC3339 timestamp. When the promotion code was created, as an RFC3339 timestamp. Format: `date-time`. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion code was created, as an RFC3339 timestamp. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.customer_id

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound..

- Value shape: (string or null). Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.expires_at

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire..

- Value shape: string. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: `date-time`. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.max_uses

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.max_uses variant 1

anyOf variant 1: Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit..

- Value shape: integer. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Format: `int64`. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.max_uses variant 2

anyOf variant 2.

- Value shape: null. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.merchant_id

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns the promotion code..

- Value shape: string. Identifier of the merchant that owns the promotion code. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns the promotion code. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.metadata

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Key-value data you attach to the promotion code..

- Value shape: Map of string. Key-value data you attach to the promotion code. Map values: maxLength: `4096`. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Key-value data you attach to the promotion code. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_code_id

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_code_id variant 1

anyOf variant 1: Unique identifier for the promotion code..

- Value shape: string. Unique identifier for the promotion code. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_code_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the promotion code. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_id

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_id variant 1

anyOf variant 1: Identifier of the promotion this code redeems..

- Value shape: string. Identifier of the promotion this code redeems. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the promotion this code redeems. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.status

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available..

- Value shape: string. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`.

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.timezone

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.timezone variant 1

anyOf variant 1: IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires..

- Value shape: string. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.unavailable_reason

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.unavailable_reason variant 1

anyOf variant 1: Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not..

- Value shape: string. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`.

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.updated_at

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the promotion code was last updated, as an RFC3339 timestamp..

- Value shape: string. When the promotion code was last updated, as an RFC3339 timestamp. When the promotion code was last updated, as an RFC3339 timestamp. Format: `date-time`. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion code was last updated, as an RFC3339 timestamp. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.uses_count

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.uses_count variant 1

anyOf variant 1: Number of times this code has been redeemed..

- Value shape: integer. Number of times this code has been redeemed. Number of times this code has been redeemed. Format: `int64`. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.uses_count variant 2

anyOf variant 2.

- Value shape: null. Number of times this code has been redeemed. 

### PromotionCodeArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.version](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion).

