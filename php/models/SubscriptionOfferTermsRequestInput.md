[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOfferTermsRequestInput

The `subscription_offer` variant of `SubscriptionTermsInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `line_items` | Required | Array of [SubscriptionOfferLineItemRequestInput](../models/SubscriptionOfferLineItemRequestInput.md#subscriptionofferlineitemrequestinput) | minItems: `1`. |
| `type` | Required | string | Values: `"subscription_offer"`. |

