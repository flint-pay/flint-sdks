[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefundListResponse

A page of `BuyerRefund` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerRefund](../models/BuyerRefund.md#buyerrefund) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerRefundListResponse.md#buyerrefundlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerRefundListResponse.data[]

Money returned against a collected payment.

Field definitions: [shared fields](BuyerRefundResponse.md#buyerrefundresponsedata).

### BuyerRefundListResponse.data[].customer

Declared alternatives: [BuyerRefundResponse.data.customer](../models/BuyerRefundResponse.md#buyerrefundresponsedatacustomer).

### BuyerRefundListResponse.data[].line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### BuyerRefundListResponse.data[].order

Declared alternatives: [BuyerRefundResponse.data.order](../models/BuyerRefundResponse.md#buyerrefundresponsedataorder).

### BuyerRefundListResponse.data[].payment_intent

Declared alternatives: [BuyerRefundResponse.data.payment_intent](../models/BuyerRefundResponse.md#buyerrefundresponsedatapayment_intent).

### BuyerRefundListResponse.data[].payment_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].payment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds).

### BuyerRefundListResponse.data[].tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### BuyerRefundListResponse.data[].tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### BuyerRefundListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

