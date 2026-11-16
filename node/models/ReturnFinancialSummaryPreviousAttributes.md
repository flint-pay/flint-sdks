[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnFinancialSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collected_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Balances collected from the buyer. `collected_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributescollected_money). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credits added by confirmed, non-canceled resolutions. `credit_adjustment_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributescredit_adjustment_money). |
| `deduction_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fees withheld by confirmed, non-canceled resolutions. `deduction_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesdeduction_money). |
| `due_from_buyer_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. `due_from_buyer_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesdue_from_buyer_money). |
| `due_to_buyer_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. `due_to_buyer_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesdue_to_buyer_money). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refund amounts that succeeded. `refunded_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesrefunded_money). |
| `replacement_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of replacement merchandise on confirmed, non-canceled resolutions. `replacement_total_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesreplacement_total_money). |
| `returned_discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.discount_money across the Return's line items. `returned_discount_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesreturned_discount_money). |
| `returned_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.subtotal_money across the Return's line items. `returned_subtotal_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesreturned_subtotal_money). |
| `returned_tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.tax_money across the Return's line items. `returned_tax_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesreturned_tax_money). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of return_value.total_money across the Return's line items. `returned_total_money`: [declared alternatives](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributesreturned_total_money). |

### ReturnFinancialSummaryPreviousAttributes.collected_money

Balances collected from the buyer.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.collected_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.collected_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Balances collected from the buyer. 

### ReturnFinancialSummaryPreviousAttributes.collected_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.collected_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.credit_adjustment_money

Credits added by confirmed, non-canceled resolutions.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.credit_adjustment_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.credit_adjustment_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Credits added by confirmed, non-canceled resolutions. 

### ReturnFinancialSummaryPreviousAttributes.credit_adjustment_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.credit_adjustment_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.deduction_money

Fees withheld by confirmed, non-canceled resolutions.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.deduction_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.deduction_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fees withheld by confirmed, non-canceled resolutions. 

### ReturnFinancialSummaryPreviousAttributes.deduction_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.deduction_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.due_from_buyer_money

Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.due_from_buyer_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.due_from_buyer_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. 

### ReturnFinancialSummaryPreviousAttributes.due_from_buyer_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.due_from_buyer_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.due_to_buyer_money

Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.due_to_buyer_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.due_to_buyer_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. 

### ReturnFinancialSummaryPreviousAttributes.due_to_buyer_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.due_to_buyer_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.refunded_money

Refund amounts that succeeded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Refund amounts that succeeded. 

### ReturnFinancialSummaryPreviousAttributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.replacement_total_money

Value of replacement merchandise on confirmed, non-canceled resolutions.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.replacement_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.replacement_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value of replacement merchandise on confirmed, non-canceled resolutions. 

### ReturnFinancialSummaryPreviousAttributes.replacement_total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.replacement_total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.returned_discount_money

Sum of return_value.discount_money across the Return's line items.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.returned_discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.returned_discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of return_value.discount_money across the Return's line items. 

### ReturnFinancialSummaryPreviousAttributes.returned_discount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.returned_discount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.returned_subtotal_money

Sum of return_value.subtotal_money across the Return's line items.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.returned_subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.returned_subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of return_value.subtotal_money across the Return's line items. 

### ReturnFinancialSummaryPreviousAttributes.returned_subtotal_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.returned_subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.returned_tax_money

Sum of return_value.tax_money across the Return's line items.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.returned_tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.returned_tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of return_value.tax_money across the Return's line items. 

### ReturnFinancialSummaryPreviousAttributes.returned_tax_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.returned_tax_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ReturnFinancialSummaryPreviousAttributes.returned_total_money

Sum of return_value.total_money across the Return's line items.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnFinancialSummaryPreviousAttributes.returned_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnFinancialSummaryPreviousAttributes.returned_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of return_value.total_money across the Return's line items. 

### ReturnFinancialSummaryPreviousAttributes.returned_total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ReturnFinancialSummaryPreviousAttributes.returned_total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

