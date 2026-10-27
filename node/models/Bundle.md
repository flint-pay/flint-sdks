[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Bundle

A group of items sold together.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_for_sale` | Required | boolean | Whether the bundle is currently eligible for sale. |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `bundle_id` | Required | string | Stable identifier of the bundle. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Always present. Empty collections are returned as []. |
| `component_count` | Required | integer | Number of components in the bundle. Format: `int32`. |
| `components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the bundle's components. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the bundle shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images attached to this resource, in display order. The first image is primary. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#bundle-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Send null on update to remove it. |
| `name` | Required | string | Bundle name shown to buyers. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/Bundle.md#bundleunit_price_money). |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Current resource version. Send it as expected_version to reject a write if the resource has changed. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

#### Bundle line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### Bundle.unit_price_money

Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

