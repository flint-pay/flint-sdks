[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemValue

The value of a return line: unit price, subtotal, discount, tax, and total.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount on the returned units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/ReturnLineItemValue.md#returnlineitemvaluediscount_money). |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Subtotal of the returned units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/ReturnLineItemValue.md#returnlineitemvaluesubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on the returned units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/ReturnLineItemValue.md#returnlineitemvaluetax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/ReturnLineItemValue.md#returnlineitemvaluetotal_money). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one returned unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/ReturnLineItemValue.md#returnlineitemvalueunit_price_money). |

### ReturnLineItemValue.discount_money

Discount on the returned units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnLineItemValue.subtotal_money

Subtotal of the returned units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnLineItemValue.tax_money

Tax on the returned units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnLineItemValue.total_money

Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnLineItemValue.unit_price_money

Price of one returned unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

