[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingRequest

A product or bundle to list in a shop.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | Catalog bundle ID. minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `product_id` | Conditional | string | Catalog product ID. minLength: `1`. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `type` | Required | string | Selects the catalog item to list. Values: `"product"`, `"bundle"`. |

### ShopListingRequest variant 1: `type` = `"product"`

oneOf with type: "product": The `product` variant of `ShopListingInput`..

- Required: `product_id`.
- Optional: `bundle_id`.
- Constraints for `type`: Values: `"product"`.

### ShopListingRequest variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `ShopListingInput`..

- Required: `bundle_id`.
- Optional: `product_id`.
- Constraints for `type`: Values: `"bundle"`.

