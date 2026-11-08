[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnEligibilityPreviewRequest

A request to preview which items of an order can be returned, given an order and a selection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | ID of the Order to return items from. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `selection` | Required | [ReturnEligibilitySelection](../models/ReturnEligibilitySelection.md#returneligibilityselection) | Which fulfilled units to check. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequestselection). |

### CreateReturnEligibilityPreviewRequest.selection

Which fulfilled units to check. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Conditional | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) | The lines to check or return, each naming an order line item. `line_items[]`: [field definitions](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequestselection-variant-1line_items). |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`, `"line_items"`. |

### CreateReturnEligibilityPreviewRequest.selection variant 1: `selection_type` = `"all_remaining_fulfilled"`

oneOf with selection_type: "all_remaining_fulfilled": The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### CreateReturnEligibilityPreviewRequest.selection variant 2: `selection_type` = `"line_items"`

oneOf with selection_type: "line_items": The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### CreateReturnEligibilityPreviewRequest.selection variant 1.line_items[]

An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.

Field definitions: [shared fields](ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest).

