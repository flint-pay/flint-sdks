[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeferredPromotionInput

A promotion accepted at subscription signup for the subscription's first charged cycle. It does not discount the signup order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_facing_name` | Required | string | Name the buyer sees for the promotion, fixed when it was accepted at signup. |
| `deferred_promotion_id` | Required | string | ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example: `"dp_01KEZF7C00AZMP1PY1ER7CQ4SA"`. |
| `promotion_code` | Required | string or null | Promotion code accepted at signup. Null when the promotion was applied by ID. |
| `promotion_id` | Required | string | ID of the promotion accepted for the subscription. Example: `"promo_01KEZF7C00E1JAV4M413D9DE1P"`. |

