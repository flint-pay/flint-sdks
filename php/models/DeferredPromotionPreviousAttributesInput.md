[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeferredPromotionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the promotion, fixed when it was accepted at signup. `customer_facing_name`: [declared alternatives](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinputcustomer_facing_name). |
| `deferred_promotion_id` | Optional | string or null | ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. `deferred_promotion_id`: [declared alternatives](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinputdeferred_promotion_id). |
| `promotion_code` | Optional | string or null | Promotion code accepted at signup. Null when the promotion was applied by ID. `promotion_code`: [declared alternatives](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinputpromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion accepted for the subscription. `promotion_id`: [declared alternatives](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinputpromotion_id). |

### DeferredPromotionPreviousAttributesInput.customer_facing_name

### DeferredPromotionPreviousAttributesInput.customer_facing_name variant 1

anyOf variant 1: Name the buyer sees for the promotion, fixed when it was accepted at signup..

- Value shape: string. Name the buyer sees for the promotion, fixed when it was accepted at signup. 

### DeferredPromotionPreviousAttributesInput.customer_facing_name variant 2

anyOf variant 2.

- Value shape: null. Name the buyer sees for the promotion, fixed when it was accepted at signup. 

### DeferredPromotionPreviousAttributesInput.deferred_promotion_id

### DeferredPromotionPreviousAttributesInput.deferred_promotion_id variant 1

anyOf variant 1: ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment..

- Value shape: string. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example: `"dp_01KEZF7C00AZMP1PY1ER7CQ4SA"`. 

### DeferredPromotionPreviousAttributesInput.deferred_promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. 

### DeferredPromotionPreviousAttributesInput.promotion_code

### DeferredPromotionPreviousAttributesInput.promotion_code variant 1

anyOf variant 1: Promotion code accepted at signup. Null when the promotion was applied by ID..

- Value shape: string. Promotion code accepted at signup. Null when the promotion was applied by ID. 

### DeferredPromotionPreviousAttributesInput.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code accepted at signup. Null when the promotion was applied by ID. 

### DeferredPromotionPreviousAttributesInput.promotion_id

### DeferredPromotionPreviousAttributesInput.promotion_id variant 1

anyOf variant 1: ID of the promotion accepted for the subscription..

- Value shape: string. ID of the promotion accepted for the subscription. ID of the promotion accepted for the subscription. Example: `"promo_01KEZF7C00E1JAV4M413D9DE1P"`. 

### DeferredPromotionPreviousAttributesInput.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion accepted for the subscription. 

