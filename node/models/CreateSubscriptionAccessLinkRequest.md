[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionAccessLinkRequest

The access a subscription link gives its buyer. Omit the body or purpose for read-only access.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purpose` | Optional | string | subscription_view opens the subscription read-only. subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5 opens. Default: `"subscription_view"`. Values: `"subscription_view"`, `"subscription_manage"`. |

