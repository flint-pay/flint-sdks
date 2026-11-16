[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteLineItemResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. `bundle_component_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputbundle_component_id). |
| `order_id` | Optional | string or null | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. `order_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item. `order_line_item_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |

### DeliveryQuoteLineItemResourcePreviousAttributesInput.bundle_component_id

### DeliveryQuoteLineItemResourcePreviousAttributesInput.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle..

- Value shape: string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.order_id

### DeliveryQuoteLineItemResourcePreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order that owns this line item. Checkout credentials receive only their own session's order ID..

- Value shape: string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.order_line_item_id

### DeliveryQuoteLineItemResourcePreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: ID of the order line item..

- Value shape: string. ID of the order line item. ID of the order line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity

### DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

