[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionOfferLineItemRequestInput

A subscription offer and variant to include in subscription offer terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription_offer_id` | Required | string | ID of the active subscription offer that covers the variant. minLength: `1`. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |
| `variant_id` | Required | string | ID of the catalog variant to subscribe to. It must be one the offer covers, and no two lines can name the same variant. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

