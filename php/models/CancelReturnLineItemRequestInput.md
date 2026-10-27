[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnLineItemRequestInput

The request body for: Cancel return line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `handback_quantity` | Optional | integer string | How many of the canceled units the buyer no longer has to send back, as a whole number; fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower it only as far as the canceled quantity requires. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"buyer_request"`, `"merchant_request"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

