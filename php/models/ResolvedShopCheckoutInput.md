[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvedShopCheckoutInput

The hosted checkout launch and its order ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string | Checkout session ID. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `expires_at` | Required | string | Session expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order_id` | Required | string | ID of the order created from the cart. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `shop_id` | Required | string | ID of the shop. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. |
| `status` | Required | string | Checkout session status. Resolve succeeds only while the session is open. Values: `"open"`, `"paid"`, `"partially_paid"`, `"expired"`, `"closed"`, `"invalidated"`. |
| `type` | Required | string | How checkout started. Values: `"order"`, `"quick_pay"`, `"subscription_plan"`, `"invoice"`, `"payment_link"`, `"shop"`. |
| `url` | Required | string | Hosted checkout launch URL containing a private token. Format: `uri`. Example: `"https://example.com/receipt"`. |

