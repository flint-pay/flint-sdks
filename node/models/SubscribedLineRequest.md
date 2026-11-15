[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscribedLineRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges, from 1 to 365. Format: `int32`. minimum: `1`. maximum: `365`. |
| `subscription_offer_id` | Required | string | Active subscription offer for this catalog variant. minLength: `1`. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |

### SubscribedLineRequest variant 1

anyOf variant 1: Declared schema SubscribedLineRequest. Makes an order line a subscription purchase, with the subscription offer and billing interval..

No additional constraints.

### SubscribedLineRequest variant 2

anyOf variant 2: Declared schema SubscribedLineRequestModel. Makes an order line a subscription purchase, with the subscription offer and billing interval..

No additional constraints.

