[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InitialGiftCardFunding

The initial funding for a new gift card: the `source` of the value, the `value_money`, and optional consideration and source time.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. `consideration_money`: [declared alternatives](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestconsideration_money). |
| `source` | Required | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestsource). |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |

### InitialGiftCardFunding.consideration_money

Declared alternatives: [CreateGiftCardLoadRequest.consideration_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestconsideration_money).

### InitialGiftCardFunding.source

Declared alternatives: [CreateGiftCardLoadRequest.source](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestsource).

### InitialGiftCardFunding.value_money

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

