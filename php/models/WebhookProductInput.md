[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookProductInput

The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer | Number of active variants belonging to the product. Format: `int32`. |
| `categories` | Required | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) | Always present. Empty collections are returned as []. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_variant` | Optional | [ProductVariantInput](../models/ProductVariantInput.md#productvariantinput) | The product's default variant, when one is set. A specific purchasable version of a product. |
| `default_variant_id` | Optional | string | Identifier of the variant chosen as this product's default, when one is set. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the product shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `images` | Required | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | Images attached to this resource, in display order. The first image is primary. |
| `is_available_for_sale` | Optional | boolean | Whether the product is active and has at least one active variant. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Product name shown to buyers. |
| `option_count` | Optional | integer | Number of active options belonging to the product. Format: `int32`. |
| `options` | Required | Array of [ProductOptionInput](../models/ProductOptionInput.md#productoptioninput) | Product options and their non-archived values. Empty when the product has no options. |
| `price_range` | Optional | [ProductPriceRangeInput](../models/ProductPriceRangeInput.md#productpricerangeinput) | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants. |
| `product_id` | Required | string | Stable identifier of the product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_type` | Required | string | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Required | string | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_count` | Optional | integer | Number of non-archived variants belonging to the product. Format: `int32`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

