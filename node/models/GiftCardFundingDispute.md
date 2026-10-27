[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDispute

A dispute on the payment that funded a gift card load, with its status and any loss resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `dispute_id` | Required | string |  |
| `requires_resolution` | Required | boolean |  |
| `resolution` | Required | [GiftCardFundingLossResolution](../models/GiftCardFundingLossResolution.md#giftcardfundinglossresolution) or null |  |
| `status` | Required | string | Values: `"open"`, `"won"`, `"lost"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

