[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditChargeRefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The charge value released. The order no longer owes it. `amount_money`: [declared alternatives](../models/OrderEditChargeRefundPreviousAttributes.md#ordereditchargerefundpreviousattributesamount_money). |
| `order_charge_id` | Optional | string or null | The order charge whose value is released. `order_charge_id`: [declared alternatives](../models/OrderEditChargeRefundPreviousAttributes.md#ordereditchargerefundpreviousattributesorder_charge_id). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of amount_money refunded to the buyer. `refund_money`: [declared alternatives](../models/OrderEditChargeRefundPreviousAttributes.md#ordereditchargerefundpreviousattributesrefund_money). |

### OrderEditChargeRefundPreviousAttributes.amount_money

The charge value released. The order no longer owes it.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditChargeRefundPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditChargeRefundPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The charge value released. The order no longer owes it. 

### OrderEditChargeRefundPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderEditChargeRefundPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderEditChargeRefundPreviousAttributes.order_charge_id

### OrderEditChargeRefundPreviousAttributes.order_charge_id variant 1

anyOf variant 1: The order charge whose value is released..

- Value shape: string. The order charge whose value is released. The order charge whose value is released. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderEditChargeRefundPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. The order charge whose value is released. 

### OrderEditChargeRefundPreviousAttributes.refund_money

The part of amount_money refunded to the buyer.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditChargeRefundPreviousAttributes.refund_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditChargeRefundPreviousAttributes.refund_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of amount_money refunded to the buyer. 

### OrderEditChargeRefundPreviousAttributes.refund_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderEditChargeRefundPreviousAttributes.refund_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

