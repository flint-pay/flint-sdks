[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeferredPromotionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the promotion, fixed when it was accepted at signup. `customer_facing_name`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributescustomer_facing_name). |
| `deferred_promotion_id` | Optional | string or null | ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. `deferred_promotion_id`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributesdeferred_promotion_id). |
| `promotion_code` | Optional | string or null | Promotion code accepted at signup. Null when the promotion was applied by ID. `promotion_code`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion accepted for the subscription. `promotion_id`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributespromotion_id). |

### DeferredPromotionPreviousAttributes.customer_facing_name

### DeferredPromotionPreviousAttributes.customer_facing_name variant 1

anyOf variant 1: Name the buyer sees for the promotion, fixed when it was accepted at signup..

- Value shape: string. Name the buyer sees for the promotion, fixed when it was accepted at signup. 

### DeferredPromotionPreviousAttributes.customer_facing_name variant 2

anyOf variant 2.

- Value shape: null. Name the buyer sees for the promotion, fixed when it was accepted at signup. 

### DeferredPromotionPreviousAttributes.deferred_promotion_id

### DeferredPromotionPreviousAttributes.deferred_promotion_id variant 1

anyOf variant 1: ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment..

- Value shape: string. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example: `"dp_01KEZF7C00AZMP1PY1ER7CQ4SA"`. 

### DeferredPromotionPreviousAttributes.deferred_promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. 

### DeferredPromotionPreviousAttributes.promotion_code

### DeferredPromotionPreviousAttributes.promotion_code variant 1

anyOf variant 1: Promotion code accepted at signup. Null when the promotion was applied by ID..

- Value shape: string. Promotion code accepted at signup. Null when the promotion was applied by ID. 

### DeferredPromotionPreviousAttributes.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code accepted at signup. Null when the promotion was applied by ID. 

### DeferredPromotionPreviousAttributes.promotion_id

### DeferredPromotionPreviousAttributes.promotion_id variant 1

anyOf variant 1: ID of the promotion accepted for the subscription..

- Value shape: string. ID of the promotion accepted for the subscription. ID of the promotion accepted for the subscription. Example: `"promo_01KEZF7C00E1JAV4M413D9DE1P"`. 

### DeferredPromotionPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion accepted for the subscription. 

