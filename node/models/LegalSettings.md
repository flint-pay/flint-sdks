[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LegalSettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Optional | string |  |
| `refund_policy_url` | Optional | string |  |
| `require_terms_of_service` | Optional | boolean | Whether the buyer must accept the terms of service before paying. |
| `shipping_policy_url` | Optional | string |  |
| `terms_of_service_url` | Optional | string |  |

### LegalSettings variant 1

anyOf variant 1: Declared schema CheckoutLegalConfig. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract..

- Constraints for `contract_url`: An `https://` URL of the contract the buyer agrees to, linked in checkout.
- Constraints for `refund_policy_url`: An `https://` URL of your refund policy, linked in checkout.
- Constraints for `shipping_policy_url`: An `https://` URL of your shipping policy, linked in checkout.
- Constraints for `terms_of_service_url`: An `https://` URL of your terms of service, linked in checkout.

### LegalSettings variant 2

anyOf variant 2: Declared schema CheckoutLegalConfigRequest. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract..

- Constraints for `contract_url`: An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: `1`.
- Constraints for `refund_policy_url`: An `https://` URL of your refund policy, linked in checkout. minLength: `1`.
- Constraints for `shipping_policy_url`: An `https://` URL of your shipping policy, linked in checkout. minLength: `1`.
- Constraints for `terms_of_service_url`: An `https://` URL of your terms of service, linked in checkout. minLength: `1`.

### LegalSettings variant 3

anyOf variant 3: Declared schema LegalSettings. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms..

- Constraints for `contract_url`: An `https://` URL of at most 2,048 bytes.
- Constraints for `refund_policy_url`: An `https://` URL of at most 2,048 bytes.
- Constraints for `shipping_policy_url`: An `https://` URL of at most 2,048 bytes.
- Constraints for `terms_of_service_url`: An `https://` URL of at most 2,048 bytes.

### LegalSettings variant 4

anyOf variant 4: Declared schema PaymentLinkLegalConfig. Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms..

- Constraints for `contract_url`: An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: `1`. maxLength: `2048`.
- Constraints for `refund_policy_url`: An `https://` URL of your refund policy, linked in checkout. minLength: `1`. maxLength: `2048`.
- Constraints for `shipping_policy_url`: An `https://` URL of your shipping policy, linked in checkout. minLength: `1`. maxLength: `2048`.
- Constraints for `terms_of_service_url`: An `https://` URL of your terms of service, linked in checkout. minLength: `1`. maxLength: `2048`.

