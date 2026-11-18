[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDiscountPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. `amount_money`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesamount_money). |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. `applied_money`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesapplied_money). |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. `discount_class`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesdiscount_class). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. `promotion_code`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion that supplied this discount. Absent for a manual discount. `promotion_id`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributespromotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource). |

### InvoiceDiscountPreviousAttributes.amount_money

Discount amount before limits apply, such as 20% of $100 resolving to $20.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceDiscountPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceDiscountPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Discount amount before limits apply, such as 20% of $100 resolving to $20. 

### InvoiceDiscountPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceDiscountPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceDiscountPreviousAttributes.applied_money

Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceDiscountPreviousAttributes.applied_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceDiscountPreviousAttributes.applied_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. 

### InvoiceDiscountPreviousAttributes.applied_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceDiscountPreviousAttributes.applied_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceDiscountPreviousAttributes.customer_facing_name

### InvoiceDiscountPreviousAttributes.customer_facing_name variant 1

anyOf variant 1: Name the buyer sees for the discount..

- Value shape: string. Name the buyer sees for the discount. 

### InvoiceDiscountPreviousAttributes.customer_facing_name variant 2

anyOf variant 2.

- Value shape: null. Name the buyer sees for the discount. 

### InvoiceDiscountPreviousAttributes.discount_class

### InvoiceDiscountPreviousAttributes.discount_class variant 1

anyOf variant 1: Which part of the order the discount reduces..

- Value shape: string. Which part of the order the discount reduces. Values: `"order"`, `"line_item"`.

### InvoiceDiscountPreviousAttributes.discount_class variant 2

anyOf variant 2.

- Value shape: null. Which part of the order the discount reduces. 

### InvoiceDiscountPreviousAttributes.promotion_code

### InvoiceDiscountPreviousAttributes.promotion_code variant 1

anyOf variant 1: Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used..

- Value shape: string. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceDiscountPreviousAttributes.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceDiscountPreviousAttributes.promotion_id

### InvoiceDiscountPreviousAttributes.promotion_id variant 1

anyOf variant 1: ID of the promotion that supplied this discount. Absent for a manual discount..

- Value shape: string. ID of the promotion that supplied this discount. Absent for a manual discount. ID of the promotion that supplied this discount. Absent for a manual discount. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### InvoiceDiscountPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion that supplied this discount. Absent for a manual discount. 

### InvoiceDiscountPreviousAttributes.source

### InvoiceDiscountPreviousAttributes.source variant 1

anyOf variant 1: Where the discount came from..

- Value shape: string. Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`.

### InvoiceDiscountPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Where the discount came from. 

