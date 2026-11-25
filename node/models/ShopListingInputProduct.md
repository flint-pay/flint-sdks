[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingInputProduct

The `product` variant of `ShopListingInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Catalog product ID. minLength: `1`. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `type` | Required | string | Selects the catalog item to list. Values: `"product"`. |

