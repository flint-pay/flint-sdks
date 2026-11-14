[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupTerms

Flint's merchant terms the owner accepts by entering the code, fixed when the signup was created.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `url` | Required | string | Where the terms are published. Link to it beside the checkbox in your form. |
| `version` | Required | string | The terms version. Send it as `terms_acceptance.merchant_terms_version` on verify. |

