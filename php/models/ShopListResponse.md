[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShopListResponse

A page of `Shop` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Shop](../models/Shop.md#shop) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/ShopListResponse.md#shoplistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ShopListResponse.data[]

A hosted catalog configured by a merchant.

Field definitions: [shared fields](ShopResponse.md#shopresponsedata).

### ShopListResponse.data[].image

Declared alternatives: [ShopResponse.data.image](../models/ShopResponse.md#shopresponsedataimage).

### ShopListResponse.data[].inventory_routing_source

Declared alternatives: [ShopResponse.data.inventory_routing_source](../models/ShopResponse.md#shopresponsedatainventory_routing_source).

### ShopListResponse.data[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### ShopListResponse.data[].redirects

Field definitions: [ShopResponse.data.redirects](../models/ShopResponse.md#shopresponsedataredirects).

### ShopListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

