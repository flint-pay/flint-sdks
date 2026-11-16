[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivablesPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Optional | Array of [CustomerReceivableBalancePreviousAttributes](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributes) or null | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances`: [declared alternatives](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### CustomerReceivablesPreviousAttributes.balances

### CustomerReceivablesPreviousAttributes.balances variant 1

anyOf variant 1: One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing..

- Value shape: Array of [CustomerReceivableBalancePreviousAttributes](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributes). One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerReceivablesPreviousAttributes.balances variant 2

anyOf variant 2.

- Value shape: null. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerReceivablesPreviousAttributes.balances variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances-variant-1-fields-1currency). |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. |
| `overdue_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. |

### CustomerReceivablesPreviousAttributes.balances variant 1.[] fields 1.currency

### CustomerReceivablesPreviousAttributes.balances variant 1.[] fields 1.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### CustomerReceivablesPreviousAttributes.balances variant 1.[] fields 1.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### CustomerReceivablesPreviousAttributes.observed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

