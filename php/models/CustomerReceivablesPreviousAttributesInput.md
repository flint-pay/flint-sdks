[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivablesPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Optional | Array of [CustomerReceivableBalancePreviousAttributesInput](../models/CustomerReceivableBalancePreviousAttributesInput.md#customerreceivablebalancepreviousattributesinput) or null | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances`: [declared alternatives](../models/CustomerReceivablesPreviousAttributesInput.md#customerreceivablespreviousattributesinputbalances). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### CustomerReceivablesPreviousAttributesInput.balances

### CustomerReceivablesPreviousAttributesInput.balances variant 1

anyOf variant 1: One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing..

- Value shape: Array of [CustomerReceivableBalancePreviousAttributesInput](../models/CustomerReceivableBalancePreviousAttributesInput.md#customerreceivablebalancepreviousattributesinput). One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerReceivablesPreviousAttributesInput.balances variant 2

anyOf variant 2.

- Value shape: null. One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. 

### CustomerReceivablesPreviousAttributesInput.observed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

