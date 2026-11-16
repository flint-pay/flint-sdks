[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletionBlockerPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Values: [11 declared values](ReturnCompletionBlockerInput.md#returncompletionblockerinput-code-values). `code`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributescode). |
| `message` | Optional | string or null | Explanation of what is still owed. `message`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesmessage). |
| `return_id` | Optional | string or null or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the entry is about. `return_line_item_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt holding this blocker up. `return_receipt_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_receipt_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution holding this blocker up. `return_resolution_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_resolution_id). |

### ReturnCompletionBlockerPreviousAttributes.code

### ReturnCompletionBlockerPreviousAttributes.code variant 1

anyOf variant 1: What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding..

- Value shape: string. What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Values: `"decision_pending"`, `"handoff_pending"`, `"receipt_pending"`, `"inspection_pending"`, `"inspection_review_required"`, `"disposition_required"`, `"resolution_not_selected"`, `"resolution_pending"`, `"resolution_requires_action"`, `"resolution_failed"`, `"merchandise_exception"`.

### ReturnCompletionBlockerPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. 

### ReturnCompletionBlockerPreviousAttributes.message

### ReturnCompletionBlockerPreviousAttributes.message variant 1

anyOf variant 1: Explanation of what is still owed..

- Value shape: string. Explanation of what is still owed. 

### ReturnCompletionBlockerPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. Explanation of what is still owed. 

### ReturnCompletionBlockerPreviousAttributes.return_id

### ReturnCompletionBlockerPreviousAttributes.return_id variant 1

anyOf variant 1: Return that owns return_line_item_id. `null` when return_line_item_id is null..

- Value shape: (string or null). Return that owns return_line_item_id. `null` when return_line_item_id is null. 

### ReturnCompletionBlockerPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Return that owns return_line_item_id. `null` when return_line_item_id is null. 

### ReturnCompletionBlockerPreviousAttributes.return_line_item_id

### ReturnCompletionBlockerPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the entry is about..

- Value shape: string. ID of the Return line the entry is about. 

### ReturnCompletionBlockerPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the entry is about. 

### ReturnCompletionBlockerPreviousAttributes.return_receipt_id

### ReturnCompletionBlockerPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: ID of the receipt holding this blocker up..

- Value shape: string. ID of the receipt holding this blocker up. 

### ReturnCompletionBlockerPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt holding this blocker up. 

### ReturnCompletionBlockerPreviousAttributes.return_resolution_id

### ReturnCompletionBlockerPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the resolution holding this blocker up..

- Value shape: string. ID of the resolution holding this blocker up. 

### ReturnCompletionBlockerPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the resolution holding this blocker up. 

