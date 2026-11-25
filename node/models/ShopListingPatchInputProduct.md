[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingPatchInputProduct

The `product` variant of `ShopListingPatchInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string | Catalog product ID. minLength: `1`. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `shop_listing_id` | Optional | string | The existing listing ID, if supplied. minLength: `1`. pattern: `^shl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Selects the catalog item to list. Values: `"product"`. |

