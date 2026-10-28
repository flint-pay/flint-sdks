[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionAllRemainingFulfilledLineItemsItem

An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string | minLength: `1`. |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `requested_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_reason_id` | Optional | string | minLength: `1`. |

