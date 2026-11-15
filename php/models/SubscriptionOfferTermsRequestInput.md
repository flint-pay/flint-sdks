[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOfferTermsRequestInput

The `subscription_offer` variant of `SubscriptionTermsInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period to subscribe on. It must be a pair that every line's offer lists in `billing_interval_options`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of `billing_interval` units between charges. It must be a pair that every line's offer lists in `billing_interval_options`. Format: `int32`. minimum: `1`. maximum: `365`. |
| `line_items` | Required | Array of [SubscriptionOfferLineItemRequestInput](../models/SubscriptionOfferLineItemRequestInput.md#subscriptionofferlineitemrequestinput) | The catalog variants to subscribe to, each with the offer that covers it. At least one, with no repeated variant. minItems: `1`. |
| `type` | Required | string | Start the subscription from subscription offers, one per catalog variant. Values: `"subscription_offer"`. |

