[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivableBalancePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. `outstanding_money`: [declared alternatives](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributesoutstanding_money). |
| `overdue_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. `overdue_money`: [declared alternatives](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributesoverdue_money). |

### CustomerReceivableBalancePreviousAttributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency).

### CustomerReceivableBalancePreviousAttributes.outstanding_money

Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CustomerReceivableBalancePreviousAttributes.outstanding_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CustomerReceivableBalancePreviousAttributes.outstanding_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. 

### CustomerReceivableBalancePreviousAttributes.outstanding_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CustomerReceivableBalancePreviousAttributes.outstanding_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CustomerReceivableBalancePreviousAttributes.overdue_money

Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CustomerReceivableBalancePreviousAttributes.overdue_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CustomerReceivableBalancePreviousAttributes.overdue_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. 

### CustomerReceivableBalancePreviousAttributes.overdue_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CustomerReceivableBalancePreviousAttributes.overdue_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

