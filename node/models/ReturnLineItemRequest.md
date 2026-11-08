[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemRequest

An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | Note about this line. Some return reasons require one. minLength: `1`. |
| `fulfillment_id` | Optional | string | ID of the fulfillment the units were delivered in. minLength: `1`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `order_line_item_id` | Required | string | ID of the order line item being returned. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Outcome requested for this line. Eligibility checks it against the policy's allowed resolution types. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_reason_id` | Required | string | ID of the return reason for this line. The reason must be active. minLength: `1`. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. |

