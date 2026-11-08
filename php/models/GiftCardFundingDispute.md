[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDispute

A dispute on the payment that funded a gift card load, with its status and any loss resolution.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `dispute_id` | Required | string | The dispute on the payment that funded this load. |
| `requires_resolution` | Required | boolean | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. |
| `resolution` | Required | [GiftCardFundingLossResolution](../models/GiftCardFundingLossResolution.md#giftcardfundinglossresolution) or null | The funding disposition recorded for this lost dispute. `null` when you have not created one yet. |
| `status` | Required | string | Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

