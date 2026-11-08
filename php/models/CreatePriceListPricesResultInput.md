[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePriceListPricesResultInput

The price list and individual outcomes after a bulk price write.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `additions` | Required | Array of [PriceListPriceAdditionInput](../models/PriceListPriceAdditionInput.md#pricelistpriceadditioninput) | One result for each requested variant price, in request order. |
| `price_list` | Required | [PriceListInput](../models/PriceListInput.md#pricelistinput) | The price list after the batch, including its new count and aggregate version. A merchant-only set of variant prices for individual customers or customer segments. |

