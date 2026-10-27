[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLegalConfigInput

Request input. Response: [LegalSettings](../models/LegalSettings.md#legalsettings).

Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `refund_policy_url` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `require_terms_of_service` | Optional | boolean |  |
| `shipping_policy_url` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `terms_of_service_url` | Optional | string | minLength: `1`. maxLength: `2048`. |

