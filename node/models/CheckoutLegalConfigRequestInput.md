[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutLegalConfigRequestInput

Request input. Response: [LegalSettings](../models/LegalSettings.md#legalsettings).

Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | minLength: `1`. |
| `refund_policy_url` | Optional | string | minLength: `1`. |
| `require_terms_of_service` | Optional | boolean |  |
| `shipping_policy_url` | Optional | string | minLength: `1`. |
| `terms_of_service_url` | Optional | string | minLength: `1`. |

