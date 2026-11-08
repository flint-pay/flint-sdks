[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeviceListResponse

A page of `Device` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Device](../models/Device.md#device) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DeviceListResponse.md#devicelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeviceListResponse.data[]

A device registered to the merchant account by hardware fingerprint, optionally assigned to a location. Registering a device doesn't change how payments are accepted.

Field definitions: [shared fields](DeviceResponse.md#deviceresponsedata).

### DeviceListResponse.data[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### DeviceListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

