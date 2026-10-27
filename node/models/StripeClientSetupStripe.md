[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeClientSetupStripe

Stripe.js initialization context and SetupIntent setup authority.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. |
| `publishable_key` | Optional | string | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. |
| `setup_intent` | Optional | [StripeClientAuthority](../models/StripeClientAuthority.md#stripeclientauthority) | One-time client authority for the named Stripe object. This payload always names the Stripe.js call and carries its client secret. |

