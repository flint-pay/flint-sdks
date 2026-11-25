[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvedShopCheckout

The hosted checkout launch and its order ID.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Checkout session ID. |
| `expires_at` | Required | string | Session expiry. Format: `date-time`. |
| `order_id` | Required | string | ID of the order created from the cart. |
| `shop_id` | Required | string | ID of the shop. |
| `status` | Required | string | Checkout session status. Resolve succeeds only while the session is open. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `type` | Required | string | How checkout started. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`, `"shop"`. |
| `url` | Required | string | Hosted checkout launch URL containing a private token. Format: `uri`. |

