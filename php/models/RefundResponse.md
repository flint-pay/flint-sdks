[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundResponse

A response containing `Refund` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Refund](../models/Refund.md#refund) | Resource, collection, or operation result returned by this request. Money returned against a collected payment. `data`: [field definitions](../models/RefundResponse.md#refundresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RefundResponse.data

Resource, collection, or operation result returned by this request. Money returned against a collected payment.

Field definitions: [shared fields](CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds).

### RefundResponse.data.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### RefundResponse.data.line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### RefundResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### RefundResponse.data.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### RefundResponse.data.payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### RefundResponse.data.payment_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].payment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds).

### RefundResponse.data.tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### RefundResponse.data.tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### RefundResponse.data.unissued_gift_card_recoveries[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].unissued_gift_card_recoveries[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsunissued_gift_card_recoveries).

### RefundResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

