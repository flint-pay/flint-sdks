[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardLoadRequestInput

Request input. Response: [CreateGiftCardLoadRequest](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequest).

The request body for: Load a gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. `consideration_money`: [declared alternatives](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputconsideration_money). |
| `expected_gift_card_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `gift_card_id` | Required | string | The gift card to load. minLength: `1`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `source` | Required | [GiftCardFundingSourceRequestInput](../models/GiftCardFundingSourceRequestInput.md#giftcardfundingsourcerequestinput) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputsource). |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money). |

### CreateGiftCardLoadRequestInput.consideration_money

What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### CreateGiftCardLoadRequestInput.consideration_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### CreateGiftCardLoadRequestInput.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. 

### CreateGiftCardLoadRequestInput.source

Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Required | string | Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"import"`. |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `order_id` | Optional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |

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

The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CapturePaymentIntentRequest.md#capturepaymentintentrequestsplitsamount_money).

