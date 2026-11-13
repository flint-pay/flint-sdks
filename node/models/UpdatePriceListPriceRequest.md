[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePriceListPriceRequest

Change one price or its quantity schedule. Omitted fields remain unchanged. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version of this child price last read. Required when quantity_price_breaks is present. A mismatch returns VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Replace the complete quantity schedule. Omit to preserve it; send [] to clear it. The resulting complete schedule must remain valid. Include expected_version whenever quantity_price_breaks is supplied. maxItems: `10`. `quantity_price_breaks[]`: [field definitions](../models/PriceListPriceRequest.md#pricelistpricerequestquantity_price_breaks). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | New positive base net unit price in the list's currency. The resulting complete schedule must remain valid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/UpdatePriceListPriceRequest.md#updatepricelistpricerequestunit_price_money). |

### UpdatePriceListPriceRequest.quantity_price_breaks[]

Field definitions: [PriceListPriceRequest.quantity_price_breaks[]](../models/PriceListPriceRequest.md#pricelistpricerequestquantity_price_breaks).

### UpdatePriceListPriceRequest.unit_price_money

New positive base net unit price in the list's currency. The resulting complete schedule must remain valid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

