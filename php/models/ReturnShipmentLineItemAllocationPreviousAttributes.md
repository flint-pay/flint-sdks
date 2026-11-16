[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnShipmentLineItemAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | Return line whose quantity is allocated to the shipment or package. `return_line_item_id`: [declared alternatives](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributesreturn_line_item_id). |

### ReturnShipmentLineItemAllocationPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnShipmentLineItemAllocationPreviousAttributes.return_id

### ReturnShipmentLineItemAllocationPreviousAttributes.return_id variant 1

anyOf variant 1: Return that owns return_line_item_id..

- Value shape: string. Return that owns return_line_item_id. 

### ReturnShipmentLineItemAllocationPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Return that owns return_line_item_id. 

### ReturnShipmentLineItemAllocationPreviousAttributes.return_line_item_id

### ReturnShipmentLineItemAllocationPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: Return line whose quantity is allocated to the shipment or package..

- Value shape: string. Return line whose quantity is allocated to the shipment or package. Return line whose quantity is allocated to the shipment or package. minLength: `1`. 

### ReturnShipmentLineItemAllocationPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Return line whose quantity is allocated to the shipment or package. 

