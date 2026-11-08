[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnLineItemRequest

The request body for: Cancel return line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `handback_quantity` | Optional | integer | How many of the canceled units the buyer no longer has to send back, as a whole number; fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower it only as far as the canceled quantity requires. Format: `int64`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Why it is being canceled. Values: `"buyer_request"`, `"merchant_request"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |

