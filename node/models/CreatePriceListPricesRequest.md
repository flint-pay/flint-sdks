[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePriceListPricesRequest

Add or update a batch of variant prices atomically.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_price_list_version` | Optional | integer | Price list aggregate version last read. A mismatch rejects the entire batch. Format: `uint64`. minimum: `1`. |
| `on_variant_conflict` | Optional | string | Behavior when the list already prices a variant. Default: `"return_existing"`. Values: `"return_existing"`, `"update"`. |
| `prices` | Required | Array of [PriceListPriceRequest](../models/PriceListPriceRequest.md#pricelistpricerequest) | Between 1 and 500 variant prices. A price list holds at most 10,000 prices. minItems: `1`. maxItems: `500`. |

