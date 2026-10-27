[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardLoadRequest

The request body for: Load a gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `consideration_money`: [declared alternatives](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestconsideration_money). |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `source` | Required | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestsource). |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |

### CreateGiftCardLoadRequest.consideration_money

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### CreateGiftCardLoadRequest.consideration_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### CreateGiftCardLoadRequest.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null.  

### CreateGiftCardLoadRequest.source

Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Required | string | Values: `"external_payment"`, `"flint_payment"`, `"import"`. |
| `customer_id` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `order_manual_payment_id` | Optional | string | minLength: `1`. maxLength: `255`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |
| `refund_id` | Optional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Response only. |

### CreateGiftCardLoadRequest.source variant 1: `funding_source_type` = `"external_payment"`

oneOf variant 1: The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### CreateGiftCardLoadRequest.source variant 2: `funding_source_type` = `"flint_payment"`

oneOf variant 2: The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### CreateGiftCardLoadRequest.source variant 3: `funding_source_type` = `"import"`

oneOf variant 4: The `import` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### CreateGiftCardLoadRequest.value_money

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

