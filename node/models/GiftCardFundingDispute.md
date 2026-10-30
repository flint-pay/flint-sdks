[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDispute

A dispute on the payment that funded a gift card load, with its status and any loss resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `dispute_id` | Required | string | The dispute on the payment that funded this load. |
| `requires_resolution` | Required | boolean | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. |
| `resolution` | Required | [GiftCardFundingLossResolution](../models/GiftCardFundingLossResolution.md#giftcardfundinglossresolution) or null | The funding disposition recorded for this lost dispute. `null` until you create one. |
| `status` | Required | string | Values: `"open"`, `"won"`, `"lost"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. |

