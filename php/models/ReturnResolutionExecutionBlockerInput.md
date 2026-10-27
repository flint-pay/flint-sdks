[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionExecutionBlockerInput

Work that must complete before a Return resolution can finish.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Values: [8 declared values](#returnresolutionexecutionblockerinput-code-values). |
| `linked_resource` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | A reference to another resource by `resource_type` and `resource_id`. |
| `return_line_item_id` | Optional | string |  |

#### ReturnResolutionExecutionBlockerInput code values

- `"handoff_pending"`
- `"receipt_pending"`
- `"inspection_pending"`
- `"manual_release_pending"`
- `"buyer_payment_pending"`
- `"refund_pending"`
- `"replacement_order_pending"`
- `"fulfillment_pending"`

