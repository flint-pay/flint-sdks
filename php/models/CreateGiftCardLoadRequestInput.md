[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardLoadRequestInput

The request body for: Load a gift card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | `consideration_money`: [declared alternatives](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputconsideration_money). |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputsource). |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money). |

### CreateGiftCardLoadRequestInput.consideration_money

Field definitions: [shared fields](PromotionRuleValueInput.md#promotionrulevalueinput).

### CreateGiftCardLoadRequestInput.consideration_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### CreateGiftCardLoadRequestInput.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null.  

### CreateGiftCardLoadRequestInput.source

Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Required | string | Values: `"external_payment"`, `"flint_payment"`, `"import"`. |
| `customer_id` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |

### CreateGiftCardLoadRequestInput.source variant 1: `funding_source_type` = `"external_payment"`

oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### CreateGiftCardLoadRequestInput.source variant 2: `funding_source_type` = `"flint_payment"`

oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### CreateGiftCardLoadRequestInput.source variant 3: `funding_source_type` = `"import"`

oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### CreateGiftCardLoadRequestInput.value_money

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](TippingSettingsSmartTipMoneyOptionsItem.md#tippingsettingssmarttipmoneyoptionsitem).

