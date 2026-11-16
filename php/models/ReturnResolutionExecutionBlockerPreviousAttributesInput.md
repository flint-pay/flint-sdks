[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionExecutionBlockerPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Values: [8 declared values](#returnresolutionexecutionblockerpreviousattributesinput-code-values). `code`: [declared alternatives](../models/ReturnResolutionExecutionBlockerPreviousAttributesInput.md#returnresolutionexecutionblockerpreviousattributesinputcode). |
| `linked_resource` | Optional | [ResourceReferencePreviousAttributesInput](../models/ResourceReferencePreviousAttributesInput.md#resourcereferencepreviousattributesinput) or null | The resource the blocker waits on, such as a Refund or the replacement Order. |
| `return_id` | Optional | string or null or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the blocker gates. Absent when it applies to the whole resolution. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionExecutionBlockerPreviousAttributesInput.md#returnresolutionexecutionblockerpreviousattributesinputreturn_line_item_id). |

#### ReturnResolutionExecutionBlockerPreviousAttributesInput code values

- `"handoff_pending"`
- `"receipt_pending"`
- `"inspection_pending"`
- `"manual_release_pending"`
- `"buyer_payment_pending"`
- `"refund_pending"`
- `"replacement_order_pending"`
- `"fulfillment_pending"`

### ReturnResolutionExecutionBlockerPreviousAttributesInput.code

### ReturnResolutionExecutionBlockerPreviousAttributesInput.code variant 1

anyOf variant 1: handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled..

- Value shape: string. handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Values: `"handoff_pending"`, `"receipt_pending"`, `"inspection_pending"`, `"manual_release_pending"`, `"buyer_payment_pending"`, `"refund_pending"`, `"replacement_order_pending"`, `"fulfillment_pending"`.

### ReturnResolutionExecutionBlockerPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. 

### ReturnResolutionExecutionBlockerPreviousAttributesInput.return_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributesInput.return_id](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_id).

### ReturnResolutionExecutionBlockerPreviousAttributesInput.return_line_item_id

### ReturnResolutionExecutionBlockerPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the blocker gates. Absent when it applies to the whole resolution..

- Value shape: string. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionExecutionBlockerPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. 

