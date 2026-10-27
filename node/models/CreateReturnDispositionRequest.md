[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnDispositionRequest

The request body for: Create return disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | minLength: `1`. |
| `return_inspection_line_item_id` | Conditional | string | minLength: `1`. |
| `return_receipt_line_item_id` | Conditional | string | minLength: `1`. |

### CreateReturnDispositionRequest variant 1

oneOf variant 1.

- Condition: not (present(`return_inspection_line_item_id`)).
- Required: `return_receipt_line_item_id`.
- Optional: `return_inspection_line_item_id`.

### CreateReturnDispositionRequest variant 2

oneOf variant 2.

- Condition: not (present(`return_receipt_line_item_id`)).
- Required: `return_inspection_line_item_id`.
- Optional: `return_receipt_line_item_id`.

