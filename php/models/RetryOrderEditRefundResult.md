[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryOrderEditRefundResult

The order edit after a refund retry, with the refunds that attempt created for its remaining money.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The edit with its current unrefunded money and supported actions. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds. `order_edit`: [field definitions](../models/RetryOrderEditRefundResult.md#retryordereditrefundresultorder_edit). |
| `refunds` | Required | Array of [Refund](../models/Refund.md#refund) | Refunds created by this retry attempt. `refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds). |

### RetryOrderEditRefundResult.order_edit

The edit with its current unrefunded money and supported actions. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds.

Field definitions: [shared fields](OrderEditResponse.md#ordereditresponsedata).

### RetryOrderEditRefundResult.order_edit.add_line_items[]

Field definitions: [OrderEditResponse.data.add_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataadd_line_items).

### RetryOrderEditRefundResult.order_edit.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### RetryOrderEditRefundResult.order_edit.remove_line_items[]

Field definitions: [OrderEditResponse.data.remove_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items).

### RetryOrderEditRefundResult.refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds).

