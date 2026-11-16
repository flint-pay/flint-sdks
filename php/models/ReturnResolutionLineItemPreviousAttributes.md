[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the resolution covers. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_resolution_id). |
| `return_resolution_line_item_id` | Optional | string or null | ID of an existing resolution line to keep. Leave out to add a new line. `return_resolution_line_item_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributesreturn_resolution_line_item_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of the returned units this line covers. |

### ReturnResolutionLineItemPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnResolutionLineItemPreviousAttributes.release_timing

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing).

### ReturnResolutionLineItemPreviousAttributes.return_id

Declared alternatives: [ReturnShipmentLineItemAllocationPreviousAttributes.return_id](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributesreturn_id).

### ReturnResolutionLineItemPreviousAttributes.return_line_item_id

### ReturnResolutionLineItemPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the resolution covers..

- Value shape: string. ID of the Return line the resolution covers. 

### ReturnResolutionLineItemPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the resolution covers. 

### ReturnResolutionLineItemPreviousAttributes.return_resolution_id

### ReturnResolutionLineItemPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the resolution the line belongs to..

- Value shape: string. ID of the resolution the line belongs to. 

### ReturnResolutionLineItemPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the resolution the line belongs to. 

### ReturnResolutionLineItemPreviousAttributes.return_resolution_line_item_id

### ReturnResolutionLineItemPreviousAttributes.return_resolution_line_item_id variant 1

anyOf variant 1: ID of an existing resolution line to keep. Leave out to add a new line..

- Value shape: string. ID of an existing resolution line to keep. Leave out to add a new line. 

### ReturnResolutionLineItemPreviousAttributes.return_resolution_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of an existing resolution line to keep. Leave out to add a new line. 

