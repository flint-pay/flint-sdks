[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCancelActionOptions

The cancellation choices this subscription accepts from its buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancellation_reasons` | Required | Array of string | Reasons to offer, in the store's order. Empty means do not ask. Sending a reason is always optional. Items values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `retention_offer` | Optional | [BuyerCancelRetentionOffer](../models/BuyerCancelRetentionOffer.md#buyercancelretentionoffer) | An available pause the buyer may accept instead of canceling, using POST /v1/me/subscriptions/{subscription_id}/pause. The buyer may always decline and cancel. An optional alternative to cancellation that this subscription can accept. |
| `timing` | Required | string | The cancellation timing accepted by this subscription. New values may be added. Values: `"end_of_period"`, `"immediately"`, `"buyer_chooses"`. |

