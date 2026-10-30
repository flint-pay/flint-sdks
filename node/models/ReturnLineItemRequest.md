[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemRequest

An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | minLength: `1`. |
| `fulfillment_id` | Optional | string | minLength: `1`. |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_reason_id` | Required | string | minLength: `1`. |

