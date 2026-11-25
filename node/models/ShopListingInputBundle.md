[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingInputBundle

The `bundle` variant of `ShopListingInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | Catalog bundle ID. minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `type` | Required | string | Selects the catalog item to list. Values: `"bundle"`. |

