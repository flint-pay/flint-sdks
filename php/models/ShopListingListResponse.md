[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListingListResponse

A page of `ShopListing` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ShopListing](../models/ShopListing.md#shoplisting) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/ShopListingListResponse.md#shoplistinglistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ShopListingListResponse.data[]

An owned member of a shop.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | The listed bundle. Omitted when the listing uses a product. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `is_catalog_item_unavailable` | Required | boolean | Whether the catalog item is unavailable in the shop currency. |
| `product_id` | Optional | string | The listed product. Omitted when the listing uses a bundle. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `resolved_name` | Optional | string | Current name from the catalog. |
| `resolved_price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current prices in the shop currency. Omitted when unavailable. The lowest and highest unit prices across a product's variants. |
| `shop_id` | Required | string | Owning shop ID. pattern: `^shop_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shop_01KEZF7C005VQBPV4FZHDZPAHE"`. |
| `shop_listing_id` | Required | string | Permanent ID for this catalog item on the shop. pattern: `^shl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"shl_01KEZF7C005YZXRPWEH31ZXGKA"`. |
| `type` | Required | string | The catalog item this listing sells. Values: `"product"`, `"bundle"`. |

### ShopListingListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

