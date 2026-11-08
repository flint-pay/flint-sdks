[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListPriceAdditionInput

Outcome for one requested variant price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Whether the price was created, returned unchanged, or updated. Values: `"created"`, `"existing"`, `"updated"`. |
| `price_list_price` | Required | [PriceListPriceInput](../models/PriceListPriceInput.md#pricelistpriceinput) | Price stored for this variant after the request. One variant's base net unit price and quantity schedule within a price list. |

