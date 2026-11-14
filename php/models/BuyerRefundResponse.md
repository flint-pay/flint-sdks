[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRefundResponse

A response containing `BuyerRefund` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerRefund](../models/BuyerRefund.md#buyerrefund) | Resource, collection, or operation result returned by this request. Money returned against a collected payment. `data`: [field definitions](../models/BuyerRefundResponse.md#buyerrefundresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerRefundResponse.data

Resource, collection, or operation result returned by this request. Money returned against a collected payment.

Field definitions: [shared fields](CheckoutSessionResponse.md#checkoutsessionresponsedatarefunds).

### BuyerRefundResponse.data.customer

Declared alternatives: [CheckoutSessionResponse.data.refunds[].customer](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundscustomer).

### BuyerRefundResponse.data.line_item_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### BuyerRefundResponse.data.order

Declared alternatives: [CheckoutSessionResponse.data.refunds[].order](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundsorder).

### BuyerRefundResponse.data.payment_intent

Declared alternatives: [CheckoutSessionResponse.data.refunds[].payment_intent](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_intent).

### BuyerRefundResponse.data.payment_refunds[]

Field definitions: [CheckoutSessionResponse.data.refunds[].payment_refunds[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefundspayment_refunds).

### BuyerRefundResponse.data.tax_breakdown_refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### BuyerRefundResponse.data.tender_allocations[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### BuyerRefundResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

