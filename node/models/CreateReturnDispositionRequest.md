[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnDispositionRequest

The request body for: Create return disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_location_id` | Optional | string | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. minLength: `1`. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_inspection_line_item_id` | Conditional | string | ID of the inspection line the disposition covers. Absent when it covers a receipt line. minLength: `1`. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. |
| `return_receipt_line_item_id` | Conditional | string | ID of the receipt line the disposition covers. Absent when it covers an inspection line. minLength: `1`. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. |

### CreateReturnDispositionRequest variant 1

oneOf CreateReturnDispositionRequestReceiptLine: The `Receipt line` variant of `CreateReturnDispositionRequest`..

- Condition: not (present(`return_inspection_line_item_id`)).
- Required: `return_receipt_line_item_id`.
- Optional: `return_inspection_line_item_id`.

### CreateReturnDispositionRequest variant 2

oneOf CreateReturnDispositionRequestInspectionLine: The `Inspection line` variant of `CreateReturnDispositionRequest`..

- Condition: not (present(`return_receipt_line_item_id`)).
- Required: `return_inspection_line_item_id`.
- Optional: `return_receipt_line_item_id`.

### CreateReturnDispositionRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

