[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decided_at` | Optional | string or null | RFC3339 timestamp. `acceptance_decided_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `acceptance_decided_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who made the acceptance decision. |
| `acceptance_decision_reason` | Optional | string or null | Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. `acceptance_decision_reason`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputacceptance_decision_reason). |
| `acceptance_decision_reason_message` | Optional | string or null | Detail about `acceptance_decision_reason`. `acceptance_decision_reason_message`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputacceptance_decision_reason_message). |
| `acceptance_status` | Optional | string or null | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`. `acceptance_status`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputacceptance_status). |
| `available_disposition_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `available_disposition_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `condition` | Optional | string or null | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. `condition`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputcondition). |
| `finding_codes` | Optional | Array of string or null | What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. `finding_codes`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputfinding_codes). |
| `internal_note` | Optional | string or null | Note for your own team about this line. `internal_note`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputinternal_note). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `return_id` | Optional | string or null or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_id). |
| `return_inspection_id` | Optional | string or null | ID of the inspection the line belongs to. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputreturn_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | Unique identifier for this return inspection line item, prefixed `retinli_`. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputreturn_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line inspected. `return_line_item_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null | Receipt that owns return_receipt_line_item_id. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line inspected. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputreturn_receipt_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. Items values: `"decide"`. `supported_actions`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinputsupported_actions). |

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decided_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decision_reason

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decision_reason variant 1

anyOf variant 1: Why the units were accepted or rejected after review..

- Value shape: string. Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`.

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decision_reason variant 2

anyOf variant 2.

- Value shape: null. Why the units were accepted or rejected after review. 

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decision_reason_message

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decision_reason_message variant 1

anyOf variant 1: Detail about `acceptance_decision_reason`..

- Value shape: string. Detail about `acceptance_decision_reason`. 

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_decision_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `acceptance_decision_reason`. 

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_status

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_status variant 1

anyOf variant 1: Whether the inspected units were accepted, rejected, or need a merchant's decision..

- Value shape: string. Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`.

### ReturnInspectionLineItemPreviousAttributesInput.acceptance_status variant 2

anyOf variant 2.

- Value shape: null. Whether the inspected units were accepted, rejected, or need a merchant's decision. 

### ReturnInspectionLineItemPreviousAttributesInput.available_disposition_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnInspectionLineItemPreviousAttributesInput.condition

### ReturnInspectionLineItemPreviousAttributesInput.condition variant 1

anyOf variant 1: `undetermined`: The item's condition could not be assessed..

- Value shape: string. `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`.

### ReturnInspectionLineItemPreviousAttributesInput.condition variant 2

anyOf variant 2.

- Value shape: null. `undetermined`: The item's condition could not be assessed. 

### ReturnInspectionLineItemPreviousAttributesInput.finding_codes

### ReturnInspectionLineItemPreviousAttributesInput.finding_codes variant 1

anyOf variant 1: What the inspection found. Up to 50 values, none repeated..

- Value shape: Array of string. What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`.

### ReturnInspectionLineItemPreviousAttributesInput.finding_codes variant 2

anyOf variant 2.

- Value shape: null. What the inspection found. Up to 50 values, none repeated. 

### ReturnInspectionLineItemPreviousAttributesInput.internal_note

### ReturnInspectionLineItemPreviousAttributesInput.internal_note variant 1

anyOf variant 1: Note for your own team about this line..

- Value shape: string. Note for your own team about this line. 

### ReturnInspectionLineItemPreviousAttributesInput.internal_note variant 2

anyOf variant 2.

- Value shape: null. Note for your own team about this line. 

### ReturnInspectionLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnInspectionLineItemPreviousAttributesInput.return_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributesInput.return_id](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_id).

### ReturnInspectionLineItemPreviousAttributesInput.return_inspection_id

### ReturnInspectionLineItemPreviousAttributesInput.return_inspection_id variant 1

anyOf variant 1: ID of the inspection the line belongs to..

- Value shape: string. ID of the inspection the line belongs to. ID of the inspection the line belongs to. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionLineItemPreviousAttributesInput.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection the line belongs to. 

### ReturnInspectionLineItemPreviousAttributesInput.return_inspection_line_item_id

### ReturnInspectionLineItemPreviousAttributesInput.return_inspection_line_item_id variant 1

anyOf variant 1: Unique identifier for this return inspection line item, prefixed `retinli_`..

- Value shape: string. Unique identifier for this return inspection line item, prefixed `retinli_`. Unique identifier for this return inspection line item, prefixed `retinli_`. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. 

### ReturnInspectionLineItemPreviousAttributesInput.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection line item, prefixed `retinli_`. 

### ReturnInspectionLineItemPreviousAttributesInput.return_line_item_id

### ReturnInspectionLineItemPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: ID of the Return line inspected..

- Value shape: string. ID of the Return line inspected. ID of the Return line inspected. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnInspectionLineItemPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line inspected. 

### ReturnInspectionLineItemPreviousAttributesInput.return_receipt_id

### ReturnInspectionLineItemPreviousAttributesInput.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id..

- Value shape: string. Receipt that owns return_receipt_line_item_id. Receipt that owns return_receipt_line_item_id. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnInspectionLineItemPreviousAttributesInput.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. 

### ReturnInspectionLineItemPreviousAttributesInput.return_receipt_line_item_id

### ReturnInspectionLineItemPreviousAttributesInput.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line inspected..

- Value shape: string. ID of the receipt line inspected. ID of the receipt line inspected. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnInspectionLineItemPreviousAttributesInput.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line inspected. 

### ReturnInspectionLineItemPreviousAttributesInput.supported_actions

### ReturnInspectionLineItemPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. Items values: `"decide"`.

### ReturnInspectionLineItemPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. 

