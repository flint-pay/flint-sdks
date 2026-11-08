[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLegalConfigInput

Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: `1`. maxLength: `2048`. |
| `refund_policy_url` | Optional | string | An `https://` URL of your refund policy, linked in checkout. minLength: `1`. maxLength: `2048`. |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string | An `https://` URL of your shipping policy, linked in checkout. minLength: `1`. maxLength: `2048`. |
| `terms_of_service_url` | Optional | string | An `https://` URL of your terms of service, linked in checkout. minLength: `1`. maxLength: `2048`. |

