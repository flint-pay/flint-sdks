[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeferredPromotionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the promotion, fixed when it was accepted at signup. `customer_facing_name`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions-variant-1-fields-1customer_facing_name). |
| `deferred_promotion_id` | Optional | string or null | ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. `deferred_promotion_id`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributesdeferred_promotion_id). |
| `promotion_code` | Optional | string or null or null | Promotion code accepted at signup. Null when the promotion was applied by ID. `promotion_code`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions-variant-1-fields-1promotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion accepted for the subscription. `promotion_id`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributespromotion_id). |

### DeferredPromotionPreviousAttributes.customer_facing_name

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions variant 1.[] fields 1.customer_facing_name](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions-variant-1-fields-1customer_facing_name).

### DeferredPromotionPreviousAttributes.deferred_promotion_id

### DeferredPromotionPreviousAttributes.deferred_promotion_id variant 1

anyOf variant 1: ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment..

- Value shape: string. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. 

### DeferredPromotionPreviousAttributes.deferred_promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. 

### DeferredPromotionPreviousAttributes.promotion_code

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions variant 1.[] fields 1.promotion_code](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions-variant-1-fields-1promotion_code).

### DeferredPromotionPreviousAttributes.promotion_id

### DeferredPromotionPreviousAttributes.promotion_id variant 1

anyOf variant 1: ID of the promotion accepted for the subscription..

- Value shape: string. ID of the promotion accepted for the subscription. 

### DeferredPromotionPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion accepted for the subscription. 

