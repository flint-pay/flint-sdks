[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerShipmentListResponse

A page of `BuyerShipment` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerShipment](../models/BuyerShipment.md#buyershipment) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerShipmentListResponse.md#buyershipmentlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerShipmentListResponse.data[]

A shipment carrying fulfilled order items.

Field definitions: [shared fields](BuyerShipmentResponse.md#buyershipmentresponsedata).

### BuyerShipmentListResponse.data[].return_line_items[]

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

### BuyerShipmentListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

