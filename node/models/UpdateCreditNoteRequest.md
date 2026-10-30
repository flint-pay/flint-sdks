[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCreditNoteRequest

The request body for: Update credit note.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Credit note version last read. Required when line_items is present. Required when any of these fields is present: line_items. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `line_items` | Optional | Array of [CreditNoteLineItemRequest](../models/CreditNoteLineItemRequest.md#creditnotelineitemrequest) | Full replacement of the draft's owned line collection; requires expected_version. Recalculates corrections from current remaining creditable pools. After CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the existing corrections using the credit note's current version, review the new amounts, and issue again. Scalar memo or reason changes do not reprice lines. |
| `memo` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `reason` | Optional | string | Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Cannot be null; omit it to keep the current reason. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |

