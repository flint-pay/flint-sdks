[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationListResponse

A page of `DeliveryRevocation` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DeliveryRevocationListResponse.md#deliveryrevocationlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryRevocationListResponse.data[]

A permanent fence on an exact delivery method revision, rate callback revision, callback signing key, or Location geography version. Quotes that depend on it are revoked, and selections that depend on it stop being current.

Field definitions: [shared fields](DeliveryRevocationResponse.md#deliveryrevocationresponsedata).

### DeliveryRevocationListResponse.data[].target

Declared alternatives: [DeliveryRevocationResponse.data.target](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedatatarget).

### DeliveryRevocationListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

