[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LegalSettingsInput

Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |
| `refund_policy_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |
| `terms_of_service_url` | Optional | string | An `https://` URL of at most 2,048 bytes. |

