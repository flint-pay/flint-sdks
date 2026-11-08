[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleResponse

A response containing `Bundle` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Bundle](../models/Bundle.md#bundle) | The requested bundle data. Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category. `data`: [field definitions](../models/BundleResponse.md#bundleresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BundleResponse.data

The requested bundle data. Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `bundle_id` | Required | string | Stable identifier of the bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Always present. Empty collections are returned as []. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `component_count` | Required | integer | Number of components in the bundle. Format: `int32`. |
| `components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. `components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the bundle shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `images` | Required | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Images attached to this resource, in display order. The first image is primary. `images[]`: [field definitions](../models/BundleResponse.md#bundleresponsedataimages). |
| `is_available_for_sale` | Required | boolean | Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BundleResponse.md#bundleresponsedatametadata). |
| `modifier_set` | Optional | [ModifierSet](../models/ModifierSet.md#modifierset) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. `modifier_set`: [declared alternatives](../models/BundleResponse.md#bundleresponsedatamodifier_set). |
| `modifier_set_id` | Required | string or null | Attached modifier set. Send null on update to remove it. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Required | string | Bundle name shown to buyers. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. |

### BundleResponse.data.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BundleResponse.data.components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BundleResponse.data.images[]

An image attached to a resource, with its display properties and attachment metadata.

Field definitions: [shared fields](ImageAttachmentInput.md#imageattachmentinput).

### BundleResponse.data.metadata

Value shape: Map of string. Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### BundleResponse.data.modifier_set

Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string | When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Conditional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `merchant_id` | Conditional | string | Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Conditional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `modifier_groups` | Conditional | Array of [ModifierSetGroup](../models/ModifierSetGroup.md#modifiersetgroup) | Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. `modifier_groups[]`: [field definitions](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groups). |
| `modifier_set_id` | Conditional | string | Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. |
| `name` | Conditional | string | Name used to identify this modifier set. |
| `status` | Conditional | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Conditional | string | When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Version of the modifier set, including the groups it contains. Format: `uint64`. minimum: `1`. |

### BundleResponse.data.modifier_set variant 1

anyOf ModifierSet: A reusable collection of customization groups..

- Required: `modifier_groups`, `modifier_set_id`, `name`, `status`, `version`.
- Optional: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `updated_at`.

### BundleResponse.data.modifier_set variant 2

anyOf variant 2.

- Undeclared: `created_at`, `external_reference_id`, `merchant_id`, `metadata`, `modifier_groups`, `modifier_set_id`, `name`, `status`, `updated_at`, `version`.
- Value shape: null. Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. 

### BundleResponse.data.modifier_set variant 1.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### BundleResponse.data.modifier_set variant 1.modifier_groups[]

A modifier group as it appears in a modifier set, with its selection limits, display options, and per-modifier overrides.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `display_name` | Optional | string | Overrides the group's name for this set. Omit it to use the group's name. |
| `max_selected` | Optional | integer | Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: `int32`. |
| `min_selected` | Optional | integer | Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: `int32`. |
| `modifier_group` | Required | [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. A group of choices that customize an item. `modifier_group`: [field definitions](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_group). |
| `modifier_group_id` | Required | string | Stable identifier of the group contained in this entry, for either source. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_overrides` | Optional | Array of [ModifierOverride](../models/ModifierOverride.md#modifieroverride) | Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. `modifier_overrides[]`: [field definitions](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_overrides). |
| `modifier_set_group_id` | Required | string | Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Example: `"msg_01KEZF7C008GXTVA2AQ1SRFGFC"`. |
| `position` | Required | integer | Display position of this group within the set; lower values appear first. Format: `int32`. |
| `required` | Optional | boolean | Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. |
| `show_on_fulfillment` | Optional | boolean | Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. |
| `show_on_receipt` | Optional | boolean | Overrides the group's show_on_receipt for this set. Omit it to use the group's value. |
| `source` | Required | string | Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Values: `"existing"`, `"inline"`. |

### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group

Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. A group of choices that customize an item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Required | boolean | Whether buyers can select more than one unit of a list modifier. |
| `created_at` | Optional | string | When the modifier group was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `max_quantity` | Optional | integer | Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer | Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: `int32`. |
| `max_total_quantity` | Optional | integer | Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: `int64`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this modifier group. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `min_quantity` | Optional | integer | Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer | Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: `int32`. |
| `modifier_group_id` | Required | string | Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_group_type` | Required | string | Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`. |
| `modifiers` | Required | Array of [Modifier](../models/Modifier.md#modifier) | Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. `modifiers[]`: [field definitions](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_groupmodifiers). |
| `name` | Required | string | Name of the modifier group shown to buyers. |
| `show_on_fulfillment` | Required | boolean | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. |
| `show_on_receipt` | Required | boolean | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. |
| `status` | Required | string | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `text` | Optional | [TextModifierConfig](../models/TextModifierConfig.md#textmodifierconfig) | Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group: whether input is required or multiline, and its length limits. |
| `updated_at` | Optional | string | When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Version of the modifier group and its modifiers. Format: `uint64`. minimum: `1`. |

### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[]

A purchasable customization choice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the modifier was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_quantity` | Optional | integer | Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_groupmodifiers-line_item_tax_category-values). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `modifier_group_id` | Optional | string | Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_id` | Required | string | Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `name` | Required | string | Name of the choice shown to buyers. |
| `position` | Required | integer | Display position of the choice within its group; lower values appear first. Format: `int32`. |
| `selected_by_default` | Required | boolean | Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. |
| `show_on_fulfillment` | Required | boolean | Whether this modifier appears in fulfillment details. |
| `show_on_receipt` | Required | boolean | Whether this modifier appears on buyer receipts. |
| `status` | Required | string | Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this modifier's price is taxable. A modifier set can override this value. |
| `unit_price_delta_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When the modifier last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[] line_item_tax_category values

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

### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[].metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_overrides[]

Settings for one modifier that apply only within a modifier set group, overriding the modifier group's own values.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean | Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: `true`. |
| `default_quantity` | Optional | integer | Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Values: [12 declared values](#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_overrides-line_item_tax_category-values). |
| `modifier_id` | Required | string | Identifier of the list modifier these overrides apply to. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `selected_by_default` | Optional | boolean | Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. |
| `taxable` | Optional | boolean | Overrides the modifier's taxable for this set. Omit it to use the modifier's value. |
| `unit_price_delta_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_overrides[] line_item_tax_category values

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

### BundleResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

