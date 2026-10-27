[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LegalSettingsRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string or null | Send null to clear it. |
| `refund_policy_url` | Optional | string or null | Send null to clear it. |
| `require_terms_of_service` | Optional | boolean |  |
| `shipping_policy_url` | Optional | string or null | Send null to clear it. |
| `terms_of_service_url` | Optional | string or null | Send null to clear it. |

### LegalSettingsRequest variant 1

anyOf variant 1: Declared schema LegalSettingsRequest. Changes to a merchant's legal settings. Send null on a URL to clear it..

- Constraints for `contract_url`: minLength: `1`.
- Constraints for `refund_policy_url`: minLength: `1`.
- Constraints for `shipping_policy_url`: minLength: `1`.
- Constraints for `terms_of_service_url`: minLength: `1`.

### LegalSettingsRequest variant 2

anyOf variant 2: Declared schema PaymentLinkLegalPatchRequest. Changes to a payment link's legal links and terms setting. Send null on a URL to clear it..

- Constraints for `contract_url`: minLength: `1`. maxLength: `2048`.
- Constraints for `refund_policy_url`: minLength: `1`. maxLength: `2048`.
- Constraints for `shipping_policy_url`: minLength: `1`. maxLength: `2048`.
- Constraints for `terms_of_service_url`: minLength: `1`. maxLength: `2048`.

