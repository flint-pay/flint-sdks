[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## QuantityPriceBreak







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Required | integer | Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: `int64`. minimum: `2`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantquantity_price_breaksunit_price_money). |

### QuantityPriceBreak variant 1

anyOf variant 1: Declared schema QuantityPriceBreak. A net unit price that applies when one catalog line reaches minimum_quantity..

No additional constraints.

### QuantityPriceBreak variant 2

anyOf variant 2: Declared schema QuantityPriceBreakRequest. A net unit price that applies when one catalog line reaches minimum_quantity..

No additional constraints.

### QuantityPriceBreak.unit_price_money

Field definitions: [PaymentLinkAvailableVariant.quantity_price_breaks[].unit_price_money](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantquantity_price_breaksunit_price_money).

