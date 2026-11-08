[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionAccessLinkRequestInput

The access a subscription link gives its buyer. Omit the body or purpose for read-only access.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purpose` | Optional | string | subscription_view opens the subscription read-only. subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5 opens. Default: `"subscription_view"`. Values: `"subscription_view"`, `"subscription_manage"`. |
| `return_url` | Optional | string | Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

