[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductListResponse

A page of `Product` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Product](../models/Product.md#product) | The requested product data. `data[]`: [field definitions](../models/ProductListResponse.md#productlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Token for the next page. Omitted when there are no more results. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ProductListResponse.data[]

An item offered in the merchant's catalog.

Field definitions: [shared fields](ProductResponse.md#productresponsedata).

### ProductListResponse.data[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### ProductListResponse.data[].default_variant

Field definitions: [ProductResponse.data.default_variant](../models/ProductResponse.md#productresponsedatadefault_variant).

### ProductListResponse.data[].images[]

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### ProductListResponse.data[].matched_variant

Field definitions: [ProductResponse.data.matched_variant](../models/ProductResponse.md#productresponsedatamatched_variant).

### ProductListResponse.data[].metadata

Field definitions: [BundleResponse.data.metadata](../models/BundleResponse.md#bundleresponsedatametadata).

### ProductListResponse.data[].modifier_set

Declared alternatives: [BundleResponse.data.modifier_set](../models/BundleResponse.md#bundleresponsedatamodifier_set).

### ProductListResponse.data[].options[]

Field definitions: [ProductResponse.data.options[]](../models/ProductResponse.md#productresponsedataoptions).

### ProductListResponse.data[].variants[]

Field definitions: [ProductResponse.data.variants[]](../models/ProductResponse.md#productresponsedatavariants).

### ProductListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

