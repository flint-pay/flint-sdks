[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinputreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the entry is about. `return_line_item_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_line_item_id). |

### ReturnHandoffRequirementLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnHandoffRequirementLineItemPreviousAttributesInput.return_id

### ReturnHandoffRequirementLineItemPreviousAttributesInput.return_id variant 1

anyOf variant 1: Return that owns return_line_item_id..

- Value shape: string. Return that owns return_line_item_id. Return that owns return_line_item_id. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnHandoffRequirementLineItemPreviousAttributesInput.return_id variant 2

anyOf variant 2.

- Value shape: null. Return that owns return_line_item_id. 

### ReturnHandoffRequirementLineItemPreviousAttributesInput.return_line_item_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributesInput.return_line_item_id](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_line_item_id).

