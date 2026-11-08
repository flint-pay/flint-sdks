[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetListResponse

A page of `DeliveryLocationSet` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DeliveryLocationSetListResponse.md#deliverylocationsetlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryLocationSetListResponse.data[]

The locations available to a delivery method.

Field definitions: [shared fields](DeliveryLocationSetResponse.md#deliverylocationsetresponsedata).

### DeliveryLocationSetListResponse.data[].configuration

Field definitions: [DeliveryLocationSetResponse.data.configuration](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedataconfiguration).

### DeliveryLocationSetListResponse.data[].metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryLocationSetListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

