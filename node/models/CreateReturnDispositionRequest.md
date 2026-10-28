[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnDispositionRequest

The request body for: Create return disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | minLength: `1`. |
| `return_inspection_line_item_id` | Conditional | string | minLength: `1`. |
| `return_receipt_line_item_id` | Conditional | string | minLength: `1`. |

### CreateReturnDispositionRequest variant 1

oneOf variant 1: The `Receipt line` variant of `CreateReturnDispositionRequest`..

- Condition: not (present(`return_inspection_line_item_id`)).
- Required: `return_receipt_line_item_id`.
- Optional: `return_inspection_line_item_id`.

### CreateReturnDispositionRequest variant 2

oneOf variant 2: The `Inspection line` variant of `CreateReturnDispositionRequest`..

- Condition: not (present(`return_receipt_line_item_id`)).
- Required: `return_inspection_line_item_id`.
- Optional: `return_receipt_line_item_id`.

### CreateReturnDispositionRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

