[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsPreviousAttributesLineItemsItem



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer may adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemallow_quantity_adjustment). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemmin_quantity). |
| `name` | Optional | string or null | The captured line name. `name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemname). |
| `quantity` | Optional | integer or null | The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemquantity). |
| `subscription_plan_line_item_id` | Optional | string or null | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. `subscription_plan_line_item_id`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitemsubscription_plan_line_item_id). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The captured unit price. |

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.allow_quantity_adjustment

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the buyer may adjust this line quantity..

- Value shape: boolean. Whether the buyer may adjust this line quantity. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer may adjust this line quantity. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.max_quantity

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.min_quantity

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.name

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.name variant 1

anyOf variant 1: The captured line name..

- Value shape: string. The captured line name. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.name variant 2

anyOf variant 2.

- Value shape: null. The captured line name. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.quantity

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.quantity variant 1

anyOf variant 1: The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.quantity variant 2

anyOf variant 2.

- Value shape: null. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.subscription_plan_line_item_id

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.subscription_plan_line_item_id variant 1

anyOf variant 1: The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID..

- Value shape: string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. 

### CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. 

