[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeAllocation

Money returned for one order charge, including subtotal, discount, and tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total returned for this charge, including tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundChargeAllocation.md#refundchargeallocationamount_money). |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount allocated to the refunded part of the charge. It does not increase the money returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/RefundChargeAllocation.md#refundchargeallocationdiscount_money). |
| `order_charge_id` | Required | string | ID of the refunded order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | ID of the order containing the refunded charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount returned excluding tax, after discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/RefundChargeAllocation.md#refundchargeallocationsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax returned for this charge under automatic or external tax. Included in amount_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/RefundChargeAllocation.md#refundchargeallocationtax_money). |

### RefundChargeAllocation.amount_money

Total returned for this charge, including tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundChargeAllocation.discount_money

Discount allocated to the refunded part of the charge. It does not increase the money returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundChargeAllocation.subtotal_money

Charge amount returned excluding tax, after discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundChargeAllocation.tax_money

Tax returned for this charge under automatic or external tax. Included in amount_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

