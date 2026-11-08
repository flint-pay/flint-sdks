[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAddressListResponse

A page of `CustomerAddress` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [CustomerAddress](../models/CustomerAddress.md#customeraddress) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/CustomerAddressListResponse.md#customeraddresslistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerAddressListResponse.data[]

An address saved on a customer's profile.

Field definitions: [shared fields](CustomerAddressResponse.md#customeraddressresponsedata).

### CustomerAddressListResponse.data[].address

Field definitions: [CustomerAddressResponse.data.address](../models/CustomerAddressResponse.md#customeraddressresponsedataaddress).

### CustomerAddressListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

