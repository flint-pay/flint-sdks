[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Category

A catalog grouping used to organize items.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `assigned_bundle_count` | Required | integer | Number of bundles currently assigned to the category. Format: `int64`. |
| `assigned_product_count` | Required | integer | Number of products currently assigned to the category. Format: `int64`. |
| `category_id` | Required | string | Stable identifier of the category. |
| `created_at` | Required | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Description of the category. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `handle` | Required | string | Immutable handle used to assign this category to products and bundles. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/Bundle.md#bundlemetadata). |
| `name` | Required | string | Category name shown to buyers. |
| `status` | Required | string | Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Values: `"active"`, `"deleted"`. |
| `targeting_reference_count` | Required | integer | Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Format: `int64`. |
| `updated_at` | Required | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. |

### Category.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

