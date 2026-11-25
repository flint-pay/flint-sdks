[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerAccessLinkRequestInput

Purpose, delivery mode, link lifetime, and return destination for a customer access link.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Optional | string | link returns the credential for your server to relay. email asks Flint to enqueue a store-branded email to the customer's current address and returns only a delivery acknowledgement and masked recipient. Default: `"link"`. Values: `"link"`, `"email"`. |
| `expires_in_seconds` | Optional | integer | 900 (15 minutes) or 259200 (72 hours). Omission keeps 900 for link delivery; email delivery always uses 259200. Both links are single-use. An idempotent replay keeps the original expiry. Values: `900`, `259200`. |
| `purpose` | Optional | string | customer_account opens the account home. payment_method_setup opens Add card for your store and uses a card request email with email delivery. Default: `"customer_account"`. Values: `"customer_account"`, `"payment_method_setup"`. |
| `return_url` | Optional | string | Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

