[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutRedirectsRequestInput

Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Optional | string | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `expired_url` | Optional | string | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `success_url` | Optional | string | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. minLength: `1`. maxLength: `2048`. |

