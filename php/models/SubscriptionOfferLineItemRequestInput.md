[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOfferLineItemRequestInput

A subscription offer and variant to include in subscription offer terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription_offer_id` | Required | string | minLength: `1`. |
| `variant_id` | Required | string | minLength: `1`. |

