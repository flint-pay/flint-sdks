[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripeRequirements

The Stripe requirement paths to collect exclusively when a session's targeting is `targeted`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `only` | Required | Array of string | Stripe requirement paths to collect exclusively when effective_policy.targeting is targeted. They come from the targeted_requirements you sent or from Flint's remediation recommendation. |

