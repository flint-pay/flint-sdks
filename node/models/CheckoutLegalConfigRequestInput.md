[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutLegalConfigRequestInput

Request input. Response: [LegalSettings](../models/LegalSettings.md#legalsettings).

Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: `1`. |
| `refund_policy_url` | Optional | string | An `https://` URL of your refund policy, linked in checkout. minLength: `1`. |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string | An `https://` URL of your shipping policy, linked in checkout. minLength: `1`. |
| `terms_of_service_url` | Optional | string | An `https://` URL of your terms of service, linked in checkout. minLength: `1`. |

