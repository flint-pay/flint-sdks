[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivableBalancePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. |
| `overdue_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. |

### CustomerReceivableBalancePreviousAttributesInput.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency).

