[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneListResponse

A page of `DeliveryZone` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [DeliveryZone](../models/DeliveryZone.md#deliveryzone) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DeliveryZoneListResponse.md#deliveryzonelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryZoneListResponse.data[]

A geographic area served by a delivery method.

Field definitions: [shared fields](DeliveryZoneResponse.md#deliveryzoneresponsedata).

### DeliveryZoneListResponse.data[].configuration

Declared alternatives: [DeliveryZoneResponse.data.configuration](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfiguration).

### DeliveryZoneListResponse.data[].metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryZoneListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

