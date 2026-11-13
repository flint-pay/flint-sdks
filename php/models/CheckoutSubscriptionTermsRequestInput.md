[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsRequestInput

Subscription terms you set on a checkout session: billing interval, interval count, and quantity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | minimum: `1`. maximum: `365`. |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientRequestInput](../models/SubscriptionGiftRecipientRequestInput.md#subscriptiongiftrecipientrequestinput) or null | Who receives the gift, when subscription_terms.gifts_enabled is true. Replaces the whole recipient; send null to clear it. The buyer stays the purchaser. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |

