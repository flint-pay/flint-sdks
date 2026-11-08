[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePriceListPricesResult

The price list and individual outcomes after a bulk price write.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `additions` | Required | Array of [PriceListPriceAddition](../models/PriceListPriceAddition.md#pricelistpriceaddition) | One result for each requested variant price, in request order. |
| `price_list` | Required | [PriceList](../models/PriceList.md#pricelist) | The price list after the batch, including its new count and aggregate version. A merchant-only set of variant prices for individual customers or customer segments. `price_list`: [field definitions](../models/CreatePriceListPricesResult.md#createpricelistpricesresultprice_list). |

### CreatePriceListPricesResult.price_list

The price list after the batch, including its new count and aggregate version. A merchant-only set of variant prices for individual customers or customer segments.

Field definitions: [shared fields](PriceListResourceResponse.md#pricelistresourceresponsedata).

### CreatePriceListPricesResult.price_list.metadata

Field definitions: [PriceListResourceResponse.data.metadata](../models/PriceListResourceResponse.md#pricelistresourceresponsedatametadata).

