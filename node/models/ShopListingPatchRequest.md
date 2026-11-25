[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingPatchRequest

A catalog item to keep or add in a replacement list.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | Catalog bundle ID. minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `product_id` | Conditional | string | Catalog product ID. minLength: `1`. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `shop_listing_id` | Optional | string | The existing listing ID, if supplied. minLength: `1`. pattern: `^shl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Selects the catalog item to list. Values: `"product"`, `"bundle"`. |

### ShopListingPatchRequest variant 1: `type` = `"product"`

oneOf with type: "product": The `product` variant of `ShopListingPatchInput`..

- Required: `product_id`.
- Optional: `bundle_id`.
- Constraints for `type`: Values: `"product"`.

### ShopListingPatchRequest variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `ShopListingPatchInput`..

- Required: `bundle_id`.
- Optional: `product_id`.
- Constraints for `type`: Values: `"bundle"`.

