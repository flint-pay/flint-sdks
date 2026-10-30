[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSettings

Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_delivery_method_ids` | Optional | Array of string | Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Items: minLength: `1`. |
| `default_expires_in_seconds` | Optional | integer | Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `enabled_payment_options` | Optional | Array of string | Payment options checkout offers by default. Adding ach_debit in merchant settings requests ACH Direct Debit for your payment account; Flint refuses it before the account is set up, for a payment account outside the US, and in location or device settings. Each option shows only when it is available for the payment account and order. Items: minLength: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `promotion_codes_enabled` | Optional | boolean | Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; hosted checkout shows or hides code entry to match. Object-level promotion_config.codes_enabled can override it for a session or payment link. |
| `recovery_email` | Optional | [CheckoutRecoveryEmailSettings](../models/CheckoutRecoveryEmailSettings.md#checkoutrecoveryemailsettings) | Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value. |
| `require_billing_address` | Optional | boolean |  |
| `require_email` | Optional | boolean |  |
| `require_phone` | Optional | boolean |  |
| `saved_payment_details` | Optional | [CheckoutSavedPaymentDetailsSettings](../models/CheckoutSavedPaymentDetailsSettings.md#checkoutsavedpaymentdetailssettings) | Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value. |

