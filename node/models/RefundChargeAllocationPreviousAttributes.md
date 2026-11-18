[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total returned for this charge, including tax. `amount_money`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributesamount_money). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount allocated to the refunded part of the charge. It does not increase the money returned. `discount_money`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributesdiscount_money). |
| `order_charge_id` | Optional | string or null | ID of the refunded order charge. `order_charge_id`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order containing the refunded charge. `order_id`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributesorder_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount returned excluding tax, after discounts. `subtotal_money`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributessubtotal_money). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax returned for this charge under automatic or external tax. Included in amount_money. `tax_money`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributestax_money). |

### RefundChargeAllocationPreviousAttributes.amount_money

Total returned for this charge, including tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundChargeAllocationPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundChargeAllocationPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total returned for this charge, including tax. 

### RefundChargeAllocationPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundChargeAllocationPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### RefundChargeAllocationPreviousAttributes.discount_money

Discount allocated to the refunded part of the charge. It does not increase the money returned.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundChargeAllocationPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundChargeAllocationPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Discount allocated to the refunded part of the charge. It does not increase the money returned. 

### RefundChargeAllocationPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundChargeAllocationPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### RefundChargeAllocationPreviousAttributes.order_charge_id

### RefundChargeAllocationPreviousAttributes.order_charge_id variant 1

anyOf variant 1: ID of the refunded order charge..

- Value shape: string. ID of the refunded order charge. ID of the refunded order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### RefundChargeAllocationPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refunded order charge. 

### RefundChargeAllocationPreviousAttributes.order_id

### RefundChargeAllocationPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order containing the refunded charge..

- Value shape: string. ID of the order containing the refunded charge. ID of the order containing the refunded charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundChargeAllocationPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order containing the refunded charge. 

### RefundChargeAllocationPreviousAttributes.subtotal_money

Charge amount returned excluding tax, after discounts.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundChargeAllocationPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundChargeAllocationPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Charge amount returned excluding tax, after discounts. 

### RefundChargeAllocationPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundChargeAllocationPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### RefundChargeAllocationPreviousAttributes.tax_money

Tax returned for this charge under automatic or external tax. Included in amount_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundChargeAllocationPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundChargeAllocationPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax returned for this charge under automatic or external tax. Included in amount_money. 

### RefundChargeAllocationPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundChargeAllocationPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

