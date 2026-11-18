[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineRemovalPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Optional | string or null | The original order line whose units were removed. `order_line_item_id`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. `quantity`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesquantity). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of total_money refunded to the buyer, frozen when the edit was created. `refund_money`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesrefund_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it. `total_money`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributestotal_money). |

### OrderEditLineRemovalPreviousAttributes.order_line_item_id

### OrderEditLineRemovalPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The original order line whose units were removed..

- Value shape: string. The original order line whose units were removed. The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderEditLineRemovalPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The original order line whose units were removed. 

### OrderEditLineRemovalPreviousAttributes.quantity

### OrderEditLineRemovalPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. 

### OrderEditLineRemovalPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. 

### OrderEditLineRemovalPreviousAttributes.refund_money

The part of total_money refunded to the buyer, frozen when the edit was created.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineRemovalPreviousAttributes.refund_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineRemovalPreviousAttributes.refund_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of total_money refunded to the buyer, frozen when the edit was created. 

### OrderEditLineRemovalPreviousAttributes.refund_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderEditLineRemovalPreviousAttributes.refund_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderEditLineRemovalPreviousAttributes.total_money

The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderEditLineRemovalPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderEditLineRemovalPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it. 

### OrderEditLineRemovalPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderEditLineRemovalPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

