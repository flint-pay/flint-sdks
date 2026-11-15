[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantSubscription

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment.

Makes an order line a subscription purchase, with the subscription offer and billing interval.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing_interval units between charges, from 1 to 365. Format: `int32`. minimum: `1`. maximum: `365`. |
| `subscription_offer_id` | Required | string | Active subscription offer for this catalog variant. minLength: `1`. |

