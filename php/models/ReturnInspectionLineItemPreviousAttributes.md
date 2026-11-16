[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decided_at` | Optional | string or null | RFC3339 timestamp. `acceptance_decided_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `acceptance_decided_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who made the acceptance decision. `acceptance_decided_by`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decided_by). |
| `acceptance_decision_reason` | Optional | string or null | Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. `acceptance_decision_reason`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decision_reason). |
| `acceptance_decision_reason_message` | Optional | string or null | Detail about `acceptance_decision_reason`. `acceptance_decision_reason_message`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decision_reason_message). |
| `acceptance_status` | Optional | string or null | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`. `acceptance_status`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_status). |
| `available_disposition_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `available_disposition_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `condition` | Optional | string or null | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. `condition`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributescondition). |
| `finding_codes` | Optional | Array of string or null | What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. `finding_codes`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesfinding_codes). |
| `internal_note` | Optional | string or null | Note for your own team about this line. `internal_note`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesinternal_note). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id). |
| `return_inspection_id` | Optional | string or null | ID of the inspection the line belongs to. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesreturn_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | Unique identifier for this return inspection line item, prefixed `retinli_`. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesreturn_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line inspected. `return_line_item_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null | Receipt that owns return_receipt_line_item_id. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line inspected. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesreturn_receipt_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. Items values: `"decide"`. `supported_actions`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributessupported_actions). |

### ReturnInspectionLineItemPreviousAttributes.acceptance_decided_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionLineItemPreviousAttributes.acceptance_decided_by

Who made the acceptance decision.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnInspectionLineItemPreviousAttributes.acceptance_decided_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnInspectionLineItemPreviousAttributes.acceptance_decided_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who made the acceptance decision. 

### ReturnInspectionLineItemPreviousAttributes.acceptance_decided_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnInspectionLineItemPreviousAttributes.acceptance_decided_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason

### ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason variant 1

anyOf variant 1: Why the units were accepted or rejected after review..

- Value shape: string. Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`.

### ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason variant 2

anyOf variant 2.

- Value shape: null. Why the units were accepted or rejected after review. 

### ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason_message

### ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason_message variant 1

anyOf variant 1: Detail about `acceptance_decision_reason`..

- Value shape: string. Detail about `acceptance_decision_reason`. 

### ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `acceptance_decision_reason`. 

### ReturnInspectionLineItemPreviousAttributes.acceptance_status

### ReturnInspectionLineItemPreviousAttributes.acceptance_status variant 1

anyOf variant 1: Whether the inspected units were accepted, rejected, or need a merchant's decision..

- Value shape: string. Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`.

### ReturnInspectionLineItemPreviousAttributes.acceptance_status variant 2

anyOf variant 2.

- Value shape: null. Whether the inspected units were accepted, rejected, or need a merchant's decision. 

### ReturnInspectionLineItemPreviousAttributes.available_disposition_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnInspectionLineItemPreviousAttributes.condition

### ReturnInspectionLineItemPreviousAttributes.condition variant 1

anyOf variant 1: `undetermined`: The item's condition could not be assessed..

- Value shape: string. `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`.

### ReturnInspectionLineItemPreviousAttributes.condition variant 2

anyOf variant 2.

- Value shape: null. `undetermined`: The item's condition could not be assessed. 

### ReturnInspectionLineItemPreviousAttributes.finding_codes

### ReturnInspectionLineItemPreviousAttributes.finding_codes variant 1

anyOf variant 1: What the inspection found. Up to 50 values, none repeated..

- Value shape: Array of string. What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`.

### ReturnInspectionLineItemPreviousAttributes.finding_codes variant 2

anyOf variant 2.

- Value shape: null. What the inspection found. Up to 50 values, none repeated. 

### ReturnInspectionLineItemPreviousAttributes.internal_note

### ReturnInspectionLineItemPreviousAttributes.internal_note variant 1

anyOf variant 1: Note for your own team about this line..

- Value shape: string. Note for your own team about this line. 

### ReturnInspectionLineItemPreviousAttributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. Note for your own team about this line. 

### ReturnInspectionLineItemPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnInspectionLineItemPreviousAttributes.return_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.return_id](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id).

### ReturnInspectionLineItemPreviousAttributes.return_inspection_id

### ReturnInspectionLineItemPreviousAttributes.return_inspection_id variant 1

anyOf variant 1: ID of the inspection the line belongs to..

- Value shape: string. ID of the inspection the line belongs to. 

### ReturnInspectionLineItemPreviousAttributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection the line belongs to. 

### ReturnInspectionLineItemPreviousAttributes.return_inspection_line_item_id

### ReturnInspectionLineItemPreviousAttributes.return_inspection_line_item_id variant 1

anyOf variant 1: Unique identifier for this return inspection line item, prefixed `retinli_`..

- Value shape: string. Unique identifier for this return inspection line item, prefixed `retinli_`. 

### ReturnInspectionLineItemPreviousAttributes.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection line item, prefixed `retinli_`. 

### ReturnInspectionLineItemPreviousAttributes.return_line_item_id

### ReturnInspectionLineItemPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line inspected..

- Value shape: string. ID of the Return line inspected. 

### ReturnInspectionLineItemPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line inspected. 

### ReturnInspectionLineItemPreviousAttributes.return_receipt_id

### ReturnInspectionLineItemPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id..

- Value shape: string. Receipt that owns return_receipt_line_item_id. 

### ReturnInspectionLineItemPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. 

### ReturnInspectionLineItemPreviousAttributes.return_receipt_line_item_id

### ReturnInspectionLineItemPreviousAttributes.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line inspected..

- Value shape: string. ID of the receipt line inspected. 

### ReturnInspectionLineItemPreviousAttributes.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line inspected. 

### ReturnInspectionLineItemPreviousAttributes.supported_actions

### ReturnInspectionLineItemPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. Items values: `"decide"`.

### ReturnInspectionLineItemPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. 

