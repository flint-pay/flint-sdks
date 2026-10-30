[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateProductRequestInput

Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `default_variant_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `description` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when options or images is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Optional | string | Product name shown to buyers. minLength: `1`. maxLength: `255`. |
| `options` | Optional | Array of [UpdateProductOptionRequestInput](../models/UpdateProductOptionRequestInput.md#updateproductoptionrequestinput) | Replaces all product options and values atomically. Include existing option_id and option_value_id values to retain members. Omitted members are archived. Null is not accepted. |
| `product_type` | Optional | string | Kind of goods or service this product represents. Changing to digital fills variants' unset line_item_tax_category with digital_goods and advances their versions. Explicit categories are preserved. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a containing bundle would become mixed. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Optional | string | Whether the product is active or inactive. An inactive product's variants cannot be sold. Values: `"active"`, `"inactive"`. |

