[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilityLineItemRequestInput

An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string | ID of the fulfillment the units were delivered in. minLength: `1`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `order_line_item_id` | Required | string | ID of the order line item being returned. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Outcome requested for this line. Eligibility checks it against the policy's allowed resolution types. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_reason_id` | Optional | string | ID of the return reason for this line. The reason must be active. minLength: `1`. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. |

