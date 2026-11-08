[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionListResponse

A page of `CustomerTaxExemption` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/CustomerTaxExemptionListResponse.md#customertaxexemptionlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerTaxExemptionListResponse.data[]

Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID and through the archived status filter. Expired and archived records cannot be edited. These records store exemption evidence; saving one does not apply it to sales or change the customer's blanket tax_exempt flag.

Field definitions: [shared fields](CustomerTaxExemptionResponse.md#customertaxexemptionresponsedata).

### CustomerTaxExemptionListResponse.data[].coverage

Declared alternatives: [CustomerTaxExemptionResponse.data.coverage](../models/CustomerTaxExemptionResponse.md#customertaxexemptionresponsedatacoverage).

### CustomerTaxExemptionListResponse.data[].metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### CustomerTaxExemptionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

