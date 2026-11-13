[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePriceListRequestInput

Fields to change on an unarchived price list. Omitted fields remain unchanged.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_segments` | Optional | Array of string | Complete set of Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived list, including inactive lists. On PATCH, omission preserves the set and [] clears it. Include expected_version whenever customer_segments is supplied. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `expected_version` | Optional | integer | Aggregate version last read. Required when customer_segments is present. A mismatch returns VERSION_CONFLICT without changing the list. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to keep it unchanged; send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Metadata patch. Omit to keep metadata unchanged; send null to clear all metadata. |
| `name` | Optional | string | Name used to identify the price list. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Set active or inactive. To archive a price list, use DELETE /v1/price-lists/{price_list_id}. Values: `"active"`, `"inactive"`. |

