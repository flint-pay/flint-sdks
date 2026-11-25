[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingPatchInputBundle

The `bundle` variant of `ShopListingPatchInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | Catalog bundle ID. minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `shop_listing_id` | Optional | string | The existing listing ID, if supplied. minLength: `1`. pattern: `^shl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | Selects the catalog item to list. Values: `"bundle"`. |

