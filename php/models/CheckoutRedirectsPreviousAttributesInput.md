[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutRedirectsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_url` | Optional | string or null | Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. `cancel_url`: [declared alternatives](../models/CheckoutRedirectsPreviousAttributesInput.md#checkoutredirectspreviousattributesinputcancel_url). |
| `expired_url` | Optional | string or null | Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. `expired_url`: [declared alternatives](../models/CheckoutRedirectsPreviousAttributesInput.md#checkoutredirectspreviousattributesinputexpired_url). |
| `success_url` | Optional | string or null | Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. `success_url`: [declared alternatives](../models/CheckoutRedirectsPreviousAttributesInput.md#checkoutredirectspreviousattributesinputsuccess_url). |

### CheckoutRedirectsPreviousAttributesInput.cancel_url

### CheckoutRedirectsPreviousAttributesInput.cancel_url variant 1

anyOf variant 1: Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters..

- Value shape: string. Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutRedirectsPreviousAttributesInput.cancel_url variant 2

anyOf variant 2.

- Value shape: null. Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. 

### CheckoutRedirectsPreviousAttributesInput.expired_url

### CheckoutRedirectsPreviousAttributesInput.expired_url variant 1

anyOf variant 1: Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters..

- Value shape: string. Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutRedirectsPreviousAttributesInput.expired_url variant 2

anyOf variant 2.

- Value shape: null. Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. 

### CheckoutRedirectsPreviousAttributesInput.success_url

### CheckoutRedirectsPreviousAttributesInput.success_url variant 1

anyOf variant 1: Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters..

- Value shape: string. Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### CheckoutRedirectsPreviousAttributesInput.success_url variant 2

anyOf variant 2.

- Value shape: null. Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. 

