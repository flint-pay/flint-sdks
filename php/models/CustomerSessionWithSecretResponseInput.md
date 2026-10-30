[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionWithSecretResponseInput

A response containing `CustomerSessionWithSecret` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerSessionWithSecretInput](../models/CustomerSessionWithSecretInput.md#customersessionwithsecretinput) | A customer session with its `secret` and `refresh_token`, returned only when the session is created or refreshed. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

