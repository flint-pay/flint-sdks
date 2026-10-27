[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AccessLink

A link that opens an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long it works. Its url is a bearer credential, returned only when the link is created.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | When the link stops opening the resource or signing the buyer in. Format: `date-time`. |
| `purpose` | Required | string | What the link opens and how long it works. New purposes may be added; treat one you don't recognize as opening its resource. Values: `"order_view"`, `"subscription_view"`, `"subscription_manage"`, `"return_view"`, `"customer_account"`. |
| `url` | Required | string | The link to send the buyer. It carries a bearer credential, so anyone with it can open the resource or sign in as the customer, as its purpose describes, until expires_at or until it reaches its open limit. The link uses the merchant's customer account host. Format: `uri`. |

