[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutLegalConfigInput

Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | An `https://` URL of the contract the buyer agrees to, linked in checkout. |
| `refund_policy_url` | Optional | string | An `https://` URL of your refund policy, linked in checkout. |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string | An `https://` URL of your shipping policy, linked in checkout. |
| `terms_of_service_url` | Optional | string | An `https://` URL of your terms of service, linked in checkout. |

