[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AccessLink

A link into a Flint-hosted page: an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account, or the merchant's onboarding. Its purpose describes what it opens and how long it works. Its url is a bearer credential, returned only when the link is created.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | When the link stops opening what its purpose describes. Format: `date-time`. |
| `purpose` | Required | string | What the link opens and how long it works. New purposes may be added; treat one you don't recognize as opening its resource. Values: `"order_view"`, `"subscription_view"`, `"subscription_manage"`, `"return_view"`, `"customer_account"`, `"merchant_onboarding"`. |
| `return_url` | Required | string or null | The destination supplied when creating a customer, subscription, or onboarding access link. Null when omitted, always null for order and Return links, and always set for onboarding links. |
| `url` | Required | string | The link to send the person to. It carries a bearer credential, so anyone with it can open what its purpose describes until expires_at or until it reaches its open limit. Customer account links use the merchant's customer account host; onboarding links use Flint's dashboard host and carry the credential in the URL fragment. Format: `uri`. |

