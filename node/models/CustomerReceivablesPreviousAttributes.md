[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivablesPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Optional | Array of [CustomerReceivableBalancePreviousAttributes](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributes) or null | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances`: [declared alternatives](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### CustomerReceivablesPreviousAttributes.balances

### CustomerReceivablesPreviousAttributes.balances variant 1

anyOf variant 1: One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing..

- Value shape: Array of [CustomerReceivableBalancePreviousAttributes](../models/CustomerReceivableBalancePreviousAttributes.md#customerreceivablebalancepreviousattributes). One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerReceivablesPreviousAttributes.balances variant 2

anyOf variant 2.

- Value shape: null. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerReceivablesPreviousAttributes.observed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

