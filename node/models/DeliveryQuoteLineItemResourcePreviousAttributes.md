[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteLineItemResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. `bundle_component_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesbundle_component_id). |
| `order_id` | Optional | string or null | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. `order_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item. `order_line_item_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |

### DeliveryQuoteLineItemResourcePreviousAttributes.bundle_component_id

### DeliveryQuoteLineItemResourcePreviousAttributes.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle..

- Value shape: string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### DeliveryQuoteLineItemResourcePreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_id

### DeliveryQuoteLineItemResourcePreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order that owns this line item. Checkout credentials receive only their own session's order ID..

- Value shape: string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_line_item_id

### DeliveryQuoteLineItemResourcePreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item..

- Value shape: string. ID of the order line item. ID of the order line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item. 

### DeliveryQuoteLineItemResourcePreviousAttributes.quantity

### DeliveryQuoteLineItemResourcePreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### DeliveryQuoteLineItemResourcePreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

