[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutRedirects







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Optional | string | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. |
| `expired_url` | Optional | string | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. |
| `success_url` | Optional | string | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. |

### CheckoutRedirects variant 1

anyOf variant 1: Declared schema CheckoutRedirects. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url..

- Constraints for `cancel_url`: maxLength: `2048`.
- Constraints for `expired_url`: maxLength: `2048`.
- Constraints for `success_url`: maxLength: `2048`.

### CheckoutRedirects variant 2

anyOf variant 2: Declared schema CheckoutRedirectsRequest. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url..

- Constraints for `cancel_url`: minLength: `1`. maxLength: `2048`.
- Constraints for `expired_url`: minLength: `1`. maxLength: `2048`.
- Constraints for `success_url`: minLength: `1`. maxLength: `2048`.

