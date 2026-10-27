[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LegalSettingsInput

Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string |  |
| `refund_policy_url` | Optional | string |  |
| `require_terms_of_service` | Optional | boolean |  |
| `shipping_policy_url` | Optional | string |  |
| `terms_of_service_url` | Optional | string |  |

