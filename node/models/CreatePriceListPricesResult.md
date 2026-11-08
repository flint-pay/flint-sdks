[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePriceListPricesResult

The price list and individual outcomes after a bulk price write.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `additions` | Required | Array of [PriceListPriceAddition](../models/PriceListPriceAddition.md#pricelistpriceaddition) | One result for each requested variant price, in request order. |
| `price_list` | Required | [PriceList](../models/PriceList.md#pricelist) | The price list after the batch, including its new count and aggregate version. A merchant-only set of variant prices for individual customers or customer segments. |

