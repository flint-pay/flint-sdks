[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PricingAmountsInput

The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `additive_tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax added on top of prices, included in total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charge_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total of the order's service charges after service-charge discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `inclusive_tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax already included in subtotal_money and charge_money. Informational; it is not added again to total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requested_tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tip money in the total: the requested tip before payment, and settled tips net of refunds after. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with tax-inclusive prices include their tax here. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

