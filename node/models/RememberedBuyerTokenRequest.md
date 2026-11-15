[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RememberedBuyerTokenRequest

An identity token held by this checkout's backend. A token identifies the buyer and never authorizes saved cards.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `remembered_buyer_token` | Required | string | Token returned by a successful confirmation with remember_buyer. Send it only in the body. minLength: `47`. maxLength: `47`. pattern: `^rbt_[A-Za-z0-9_-]{43}$`. |

