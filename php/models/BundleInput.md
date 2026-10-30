[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleInput

Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_for_sale` | Required | boolean | Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `bundle_id` | Required | string | Stable identifier of the bundle. |
| `categories` | Required | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) | Always present. Empty collections are returned as []. |
| `component_count` | Required | integer | Number of components in the bundle. Format: `int32`. |
| `components` | Required | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the bundle shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `images` | Required | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | Images attached to this resource, in display order. The first image is primary. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `modifier_set` | Optional | [ModifierSetInput](../models/ModifierSetInput.md#modifiersetinput) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Send null on update to remove it. |
| `name` | Required | string | Bundle name shown to buyers. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

