[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimatePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Optional | boolean or null | Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. `can_pay`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributescan_pay). |
| `gift_card_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Order balance allocated to the selected gift cards. `gift_card_money`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributesgift_card_money). |
| `gift_cards` | Optional | Array of [OrderGiftCardAllocationPreviousAttributes](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes) or null | The gift cards the estimate draws from, each with the amount it covers. `gift_cards`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributesgift_cards). |
| `is_reserved` | Optional | boolean or null | Whether this estimate reserves gift-card funds. Estimates currently return false. `is_reserved`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributesis_reserved). |
| `order_version` | Optional | integer or null | Order version used to calculate this gift card allocation. Read the order again if its version changed. `order_version`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributesorder_version). |
| `processor_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Order balance remaining for the payment processor. `processor_money`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributesprocessor_money). |

### OrderGiftCardEstimatePreviousAttributes.can_pay

### OrderGiftCardEstimatePreviousAttributes.can_pay variant 1

anyOf variant 1: Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum..

- Value shape: boolean. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. 

### OrderGiftCardEstimatePreviousAttributes.can_pay variant 2

anyOf variant 2.

- Value shape: null. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. 

### OrderGiftCardEstimatePreviousAttributes.gift_card_money

Order balance allocated to the selected gift cards.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardEstimatePreviousAttributes.gift_card_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardEstimatePreviousAttributes.gift_card_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Order balance allocated to the selected gift cards. 

### OrderGiftCardEstimatePreviousAttributes.gift_card_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderGiftCardEstimatePreviousAttributes.gift_card_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderGiftCardEstimatePreviousAttributes.gift_cards

### OrderGiftCardEstimatePreviousAttributes.gift_cards variant 1

anyOf variant 1: The gift cards the estimate draws from, each with the amount it covers..

- Value shape: Array of [OrderGiftCardAllocationPreviousAttributes](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes). The gift cards the estimate draws from, each with the amount it covers. 

### OrderGiftCardEstimatePreviousAttributes.gift_cards variant 2

anyOf variant 2.

- Value shape: null. The gift cards the estimate draws from, each with the amount it covers. 

### OrderGiftCardEstimatePreviousAttributes.gift_cards variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this gift card covers. `amount_money`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-1amount_money). |
| `gift_card_id` | Optional | string or null | ID of the gift card the amount is taken from. `gift_card_id`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-1gift_card_id). |

### OrderGiftCardEstimatePreviousAttributes.gift_cards variant 1.[] fields 1.amount_money

Declared alternatives: [OrderGiftCardAllocationPreviousAttributes variant 1.amount_money](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-1amount_money).

### OrderGiftCardEstimatePreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id

Declared alternatives: [OrderGiftCardAllocationPreviousAttributes variant 1.gift_card_id](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributes-variant-1gift_card_id).

### OrderGiftCardEstimatePreviousAttributes.is_reserved

### OrderGiftCardEstimatePreviousAttributes.is_reserved variant 1

anyOf variant 1: Whether this estimate reserves gift-card funds. Estimates currently return false..

- Value shape: boolean. Whether this estimate reserves gift-card funds. Estimates currently return false. 

### OrderGiftCardEstimatePreviousAttributes.is_reserved variant 2

anyOf variant 2.

- Value shape: null. Whether this estimate reserves gift-card funds. Estimates currently return false. 

### OrderGiftCardEstimatePreviousAttributes.order_version

### OrderGiftCardEstimatePreviousAttributes.order_version variant 1

anyOf variant 1: Order version used to calculate this gift card allocation. Read the order again if its version changed..

- Value shape: integer. Order version used to calculate this gift card allocation. Read the order again if its version changed. Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. 

### OrderGiftCardEstimatePreviousAttributes.order_version variant 2

anyOf variant 2.

- Value shape: null. Order version used to calculate this gift card allocation. Read the order again if its version changed. 

### OrderGiftCardEstimatePreviousAttributes.processor_money

Order balance remaining for the payment processor.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardEstimatePreviousAttributes.processor_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardEstimatePreviousAttributes.processor_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Order balance remaining for the payment processor. 

### OrderGiftCardEstimatePreviousAttributes.processor_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderGiftCardEstimatePreviousAttributes.processor_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

