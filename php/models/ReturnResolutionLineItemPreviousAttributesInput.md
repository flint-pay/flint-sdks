[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputrelease_timing). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinputreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the resolution covers. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributesInput.md#returnresolutionlineitempreviousattributesinputreturn_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputreturn_resolution_id). |
| `return_resolution_line_item_id` | Optional | string or null | ID of an existing resolution line to keep. Leave out to add a new line. `return_resolution_line_item_id`: [declared alternatives](../models/ReturnResolutionLineItemPreviousAttributesInput.md#returnresolutionlineitempreviousattributesinputreturn_resolution_line_item_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Value of the returned units this line covers. |

### ReturnResolutionLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnResolutionLineItemPreviousAttributesInput.release_timing

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributesInput.release_timing](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputrelease_timing).

### ReturnResolutionLineItemPreviousAttributesInput.return_id

Declared alternatives: [ReturnHandoffRequirementLineItemPreviousAttributesInput.return_id](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinputreturn_id).

### ReturnResolutionLineItemPreviousAttributesInput.return_line_item_id

### ReturnResolutionLineItemPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the resolution covers..

- Value shape: string. ID of the Return line the resolution covers. ID of the Return line the resolution covers. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionLineItemPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the resolution covers. 

### ReturnResolutionLineItemPreviousAttributesInput.return_resolution_id

Declared alternatives: [ReturnReplacementLineItemPreviousAttributesInput.return_resolution_id](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinputreturn_resolution_id).

### ReturnResolutionLineItemPreviousAttributesInput.return_resolution_line_item_id

### ReturnResolutionLineItemPreviousAttributesInput.return_resolution_line_item_id variant 1

anyOf variant 1: ID of an existing resolution line to keep. Leave out to add a new line..

- Value shape: string. ID of an existing resolution line to keep. Leave out to add a new line. ID of an existing resolution line to keep. Leave out to add a new line. Example: `"retresli_01KEZF7C00CR5NCDXRBP9W14CB"`. 

### ReturnResolutionLineItemPreviousAttributesInput.return_resolution_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of an existing resolution line to keep. Leave out to add a new line. 

