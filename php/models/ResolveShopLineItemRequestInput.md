[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolveShopLineItemRequestInput

A listing, quantity, and optional selections for one cart line.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifiers` | Optional | Array of [PublicCatalogModifierRequestInput](../models/PublicCatalogModifierRequestInput.md#publiccatalogmodifierrequestinput) | Omit to apply defaults. Send an array to select exactly those modifiers. |
| `quantity` | Optional | integer | Quantity for this line. Defaults to 1, and fractional quantities are not supported. minimum: `1`. maximum: `9999`. Default: `1`. |
| `shop_listing_id` | Required | string | Listing on this shop. minLength: `1`. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `variant_id` | Optional | string | Required when the listing has several sellable variants. Omit for bundles. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

