[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LegalSettingsRequestInput

Request input. Response: [LegalSettingsRequest](../models/LegalSettingsRequest.md#legalsettingsrequest).

Changes to a merchant's legal settings. Send null on a URL to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |
| `refund_policy_url` | Optional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |
| `terms_of_service_url` | Optional | string or null | An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: `1`. |

