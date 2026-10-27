[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InitialGiftCardFundingInput

Request input. Response: [InitialGiftCardFunding](../models/InitialGiftCardFunding.md#initialgiftcardfunding).

The initial funding for a new gift card: the `source` of the value, the `value_money`, and optional consideration and source time.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | `consideration_money`: [declared alternatives](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputconsideration_money). |
| `source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputsource). |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money). |

### InitialGiftCardFundingInput.consideration_money

Declared alternatives: [CreateGiftCardLoadRequestInput.consideration_money](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputconsideration_money).

### InitialGiftCardFundingInput.source

Declared alternatives: [CreateGiftCardLoadRequestInput.source](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputsource).

### InitialGiftCardFundingInput.value_money

Field definitions: [CreateGiftCardLoadRequestInput.value_money](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money).

