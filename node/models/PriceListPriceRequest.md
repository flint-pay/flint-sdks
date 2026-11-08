[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListPriceRequest

A variant price to add to a price list.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each price must be lower than the preceding one. maxItems: `10`. `quantity_price_breaks[]`: [field definitions](../models/PriceListPriceRequest.md#pricelistpricerequestquantity_price_breaks). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive base net unit price, in the price list's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/PriceListPriceRequest.md#pricelistpricerequestunit_price_money). |
| `variant_id` | Required | string | Product variant to price. Bundles and gift cards are refused. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PriceListPriceRequest.quantity_price_breaks[]

A net unit price that applies when one catalog line reaches minimum_quantity.

Field definitions: [shared fields](QuantityPriceBreak.md#quantitypricebreak).

### PriceListPriceRequest.quantity_price_breaks[].unit_price_money

Field definitions: [PaymentLinkAvailableVariant.quantity_price_breaks[].unit_price_money](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantquantity_price_breaksunit_price_money).

### PriceListPriceRequest.unit_price_money

Positive base net unit price, in the price list's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

