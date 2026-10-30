[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountPresentation







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_name` | Optional | string or null | Name shown at the top of the Flint-hosted customer account, up to 100 characters. Without one, the account shows your business name. Send null to clear it. minLength: `1`. |

### CustomerAccountPresentation variant 1

anyOf variant 1: Declared schema CustomerAccountPresentation. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value..

No additional constraints.

### CustomerAccountPresentation variant 2

anyOf variant 2: Declared schema CustomerAccountPresentationRequest. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value..

No additional constraints.

