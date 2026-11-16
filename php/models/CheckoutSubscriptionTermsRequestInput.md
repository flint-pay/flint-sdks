[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsRequestInput

Subscription choices for a checkout session: billing interval, interval count, line quantities, and gift recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Unit of the billing period the buyer chose from `subscription_terms.billing_interval_options`. Send it with `billing_interval_count`; omit both to keep the interval the session already has. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Number of `billing_interval` units between charges. Send it with `billing_interval`. minimum: `1`. maximum: `365`. |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientRequestInput](../models/SubscriptionGiftRecipientRequestInput.md#subscriptiongiftrecipientrequestinput) or null | Who receives the gift, when subscription_terms.gifts_enabled is true. Replaces the whole recipient; send null to clear it. The buyer stays the purchaser. |
| `line_items` | Optional | Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequestInput.md#subscriptionplanchangelineitemrequestinput) | Partial quantities for distinct frozen plan lines. Omitted lines keep their quantities. Checkout credentials may set only the adjustable line, within min_quantity and max_quantity (defaults 1 and 9,999). Merchant credentials may set any line to 1 through 9,999. maxItems: `50`. |

