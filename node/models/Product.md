[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Product

An item offered in the merchant's catalog.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer | Number of active variants belonging to the product. Format: `int32`. |
| `available_for_sale` | Optional | boolean | Whether the product is active and has at least one active variant. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Always present. Empty collections are returned as []. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `default_variant` | Optional | [ProductVariant](../models/ProductVariant.md#productvariant) | The product's default variant, when one is set. A specific purchasable version of a product. |
| `default_variant_id` | Optional | string | Identifier of the variant chosen as this product's default, when one is set. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the product shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images attached to this resource, in display order. The first image is primary. |
| `matched_variant` | Optional | [ProductVariantMatch](../models/ProductVariantMatch.md#productvariantmatch) | On product list rows, the first non-archived variant by position, then variant_id, that matches all exact variant filters. Without exact variant filters, identifies the first variant whose SKU matches query. Omitted when no variant matches; a product name or description match alone does not set it. Page the product's variants to find all matches. A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/Bundle.md#bundlemetadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Send null on update to remove it. |
| `name` | Required | string | Product name shown to buyers. |
| `option_count` | Optional | integer | Number of active options belonging to the product. Format: `int32`. |
| `options` | Required | Array of [ProductOption](../models/ProductOption.md#productoption) | Product options and their non-archived values. Empty when the product has no options. |
| `price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Lowest and highest unit prices among active variants. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants. |
| `product_id` | Required | string | Stable identifier of the product. |
| `product_type` | Required | string | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. |
| `status` | Required | string | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `variant_count` | Optional | integer | Number of non-archived variants belonging to the product. Format: `int32`. |
| `variants` | Optional | Array of [ProductVariant](../models/ProductVariant.md#productvariant) | The variants this request created, ordered by `position` and then `variant_id`. Present only on the `POST /v1/products` response. Read variants later with `GET /v1/products/{product_id}/variants`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

### Product.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

