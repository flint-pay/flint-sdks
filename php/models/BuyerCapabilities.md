[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCapabilities

What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default.

minProperties: `1`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_update_delivery` | Optional | boolean | Whether buyers may change the shipping address and delivery method of their physical subscriptions. Default: `true`. |
| `cancellation_reasons` | Optional | Array of string | Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of them. maxItems: `8`. uniqueItems: `true`. Default: `[]`. Items values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `cancellation_timing` | Optional | string | When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled cancellation time is available, including scheduled, incomplete, paused, and past_due without next_retry_at, the buyer may send cancel_immediately: true under either policy. Default: `"end_of_period"`. Values: `"end_of_period"`, `"buyer_chooses"`. |
| `pause` | Optional | [BuyerPauseCapability](../models/BuyerPauseCapability.md#buyerpausecapability) | Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own subscriptions. Send at least one field. minProperties: `1`. |
| `retention_offer` | Optional | [BuyerRetentionOffer](../models/BuyerRetentionOffer.md#buyerretentionoffer) | Replaced as a whole: send every field you want to keep. The offer a buyer sees before canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one field. minProperties: `1`. |
| `skip` | Optional | [BuyerSkipCapability](../models/BuyerSkipCapability.md#buyerskipcapability) | Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals. Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send at least one field. minProperties: `1`. |

