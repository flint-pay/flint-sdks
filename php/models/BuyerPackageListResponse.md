[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPackageListResponse

A page of `BuyerPackage` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerPackage](../models/BuyerPackage.md#buyerpackage) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerPackageListResponse.md#buyerpackagelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerPackageListResponse.data[]

A package within a shipment.

Field definitions: [shared fields](BuyerPackageResponse.md#buyerpackageresponsedata).

### BuyerPackageListResponse.data[].return_line_items[]

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

### BuyerPackageListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

