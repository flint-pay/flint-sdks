[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionWithSecretResponse

A response containing `CustomerSessionWithSecret` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerSessionWithSecret](../models/CustomerSessionWithSecret.md#customersessionwithsecret) | A customer session with its `secret` and `refresh_token`, returned only when the session is created or refreshed. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

