[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeClientSetup

Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [StripeClientSetupStripe](../models/StripeClientSetupStripe.md#stripeclientsetupstripe) | Stripe.js initialization context and SetupIntent setup authority. `stripe`: [field definitions](../models/StripeClientSetup.md#stripeclientsetupstripe-fields-1). |

### StripeClientSetup.stripe fields 1

Stripe.js initialization context and SetupIntent setup authority.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. |
| `publishable_key` | Optional | string | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. |
| `setup_intent` | Optional | [StripeClientAuthority](../models/StripeClientAuthority.md#stripeclientauthority) | One-time client authority for the named Stripe object. This payload always names the Stripe.js call and carries its client secret. |

