[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkRedirectsPatchRequest

Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Optional | string or null | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `expired_url` | Optional | string or null | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: `uri`. minLength: `1`. maxLength: `2048`. |
| `success_url` | Optional | string or null | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: `uri`. minLength: `1`. maxLength: `2048`. |

