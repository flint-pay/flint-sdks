[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteLineItemResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. `bundle_component_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesbundle_component_id). |
| `order_id` | Optional | string or null | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. `order_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item. `order_line_item_id`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### DeliveryQuoteLineItemResourcePreviousAttributes.bundle_component_id

### DeliveryQuoteLineItemResourcePreviousAttributes.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle..

- Value shape: string. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. 

### DeliveryQuoteLineItemResourcePreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_id

### DeliveryQuoteLineItemResourcePreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order that owns this line item. Checkout credentials receive only their own session's order ID..

- Value shape: string. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_line_item_id

### DeliveryQuoteLineItemResourcePreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item..

- Value shape: string. ID of the order line item. 

### DeliveryQuoteLineItemResourcePreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item. 

### DeliveryQuoteLineItemResourcePreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

