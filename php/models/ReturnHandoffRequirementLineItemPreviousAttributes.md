[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the entry is about. `return_line_item_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id). |

### ReturnHandoffRequirementLineItemPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnHandoffRequirementLineItemPreviousAttributes.return_id

Declared alternatives: [ReturnShipmentLineItemAllocationPreviousAttributes.return_id](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributesreturn_id).

### ReturnHandoffRequirementLineItemPreviousAttributes.return_line_item_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.return_line_item_id](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id).

