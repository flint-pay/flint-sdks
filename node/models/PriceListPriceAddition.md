[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListPriceAddition

Outcome for one requested variant price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Whether the price was created, returned unchanged, or updated. Values: `"created"`, `"existing"`, `"updated"`. |
| `price_list_price` | Required | [PriceListPrice](../models/PriceListPrice.md#pricelistprice) | Price stored for this variant after the request. One variant's base net unit price and quantity schedule within a price list. |

