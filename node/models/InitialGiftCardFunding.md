[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InitialGiftCardFunding

The initial funding for a new gift card: the `source` of the value, the `value_money`, and optional consideration and source time.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `consideration_money`: [declared alternatives](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestconsideration_money). |
| `source` | Required | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestsource). |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |

### InitialGiftCardFunding.consideration_money

Declared alternatives: [CreateGiftCardLoadRequest.consideration_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestconsideration_money).

### InitialGiftCardFunding.source

Declared alternatives: [CreateGiftCardLoadRequest.source](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestsource).

### InitialGiftCardFunding.value_money

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

