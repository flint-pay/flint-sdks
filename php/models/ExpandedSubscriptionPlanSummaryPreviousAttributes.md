[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of `billing_interval` units between charges on the plan's default pair. `billing_interval_count`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. `billing_interval_options`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_options). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `description` | Optional | string or null | Description of the plan. Omitted when none is set. `description`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesdescription). |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. `line_items`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items). |
| `name` | Optional | string or null | Name of the plan. Buyers see it at checkout and on their subscription. `name`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesname). |
| `setup_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. |
| `status` | Optional | string or null | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesstatus). |
| `subscription_plan_id` | Optional | string or null | Unique identifier for this subscription plan, prefixed `plan_`. `subscription_plan_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributessubscription_plan_id). |
| `trial_period_days` | Optional | integer or null | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. `trial_period_days`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributestrial_period_days). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval variant 1

anyOf variant 1: Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none..

- Value shape: string. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of `billing_interval` units between charges on the plan's default pair..

- Value shape: integer. Number of `billing_interval` units between charges on the plan's default pair. Number of `billing_interval` units between charges on the plan's default pair. Format: `int32`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of `billing_interval` units between charges on the plan's default pair. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options variant 1

anyOf variant 1: Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.description

### ExpandedSubscriptionPlanSummaryPreviousAttributes.description variant 1

anyOf variant 1: Description of the plan. Omitted when none is set..

- Value shape: string. Description of the plan. Omitted when none is set. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the plan. Omitted when none is set. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1

anyOf variant 1: The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. `allow_quantity_adjustment`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1allow_quantity_adjustment). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. `bundle_components`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1bundle_components). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle the line sells. Present on a bundle line. `bundle_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. `categories`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1categories). |
| `description` | Optional | string or null | Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. `description`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1description). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1max_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1min_quantity). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. `modifiers`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1modifiers). |
| `name` | Optional | string or null | Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. `name`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1name). |
| `product_id` | Optional | string or null | ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. `selected_options`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1selected_options). |
| `sku` | Optional | string or null | SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. `sku`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1sku). |
| `subscription_plan_line_item_id` | Optional | string or null | Unique identifier for this subscription plan line item, prefixed `spli_`. `subscription_plan_line_item_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1subscription_plan_line_item_id). |
| `swap_variant_ids` | Optional | Array of string or null | IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. `swap_variant_ids`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variant_ids). |
| `swap_variants` | Optional | Array of object or null | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. `swap_variants`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variants). |
| `tax` | Optional | Alternative shapes (see declared variants) | How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. `tax`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax). |
| `type` | Optional | (string or null) | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1-variant-1type), [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1-variant-2type), [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1-variant-3type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line sells. Present on a variant line. `variant_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1variant_id). |

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 1: `type` = `"variant"`

anyOf SubscriptionPlanLineItemVariantPreviousAttributes.

- Constraints for `type`: Values: `"variant"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 2: `type` = `"bundle"`

anyOf SubscriptionPlanLineItemBundlePreviousAttributes.

- Constraints for `type`: Values: `"bundle"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 3: `type` = `"custom"`

anyOf SubscriptionPlanLineItemCustomPreviousAttributes.

- Constraints for `type`: Values: `"custom"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 1

anyOf variant 1: Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment..

- Value shape: boolean. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_components

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_components variant 1

anyOf variant 1: Components of the bundle, fixed when the line was added. Omitted on variant and custom lines..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_components variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents-variant-1-fields-1).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the catalog bundle the line sells. Present on a bundle line..

- Value shape: string. ID of the catalog bundle the line sells. Present on a bundle line. ID of the catalog bundle the line sells. Present on a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog bundle the line sells. Present on a bundle line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.categories

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.categories variant 1

anyOf variant 1: Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.categories variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories-variant-1-fields-1).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.description

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.description variant 1

anyOf variant 1: Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none..

- Value shape: string. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.description variant 2

anyOf variant 2.

- Value shape: null. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.max_quantity

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.min_quantity

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.modifiers

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.modifiers variant 1

anyOf variant 1: Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.modifiers variant 1.[] fields 1

Field definitions: [FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.name

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent..

- Value shape: string. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.product_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.selected_options

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options-variant-1-fields-1).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.sku

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.sku variant 1

anyOf variant 1: SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU..

- Value shape: string. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription plan line item, prefixed `spli_`..

- Value shape: string. Unique identifier for this subscription plan line item, prefixed `spli_`. Unique identifier for this subscription plan line item, prefixed `spli_`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan line item, prefixed `spli_`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variant_ids

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variant_ids variant 1

anyOf variant 1: IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines..

- Value shape: Array of string. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variant_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1

anyOf variant 1: Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array..

- Value shape: Array of object. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 2

anyOf variant 2.

- Value shape: null. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Primary image of the variant or its product. Omitted when there is none. |
| `name` | Optional | string or null | Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. `name`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variants-variant-1-fields-1name). |
| `product_id` | Optional | string or null | Identifier of the product the offered swap variant belongs to. `product_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variants-variant-1-fields-1product_id). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option values that identify the variant, such as size and color. `selected_options`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variants-variant-1-fields-1selected_options). |
| `sku` | Optional | string or null | SKU of the variant. Omitted when it has none. `sku`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variants-variant-1-fields-1sku). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. |
| `variant_id` | Optional | string or null | ID of the variant a subscriber can swap to. `variant_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1swap_variants-variant-1-fields-1variant_id). |

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.name

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.name variant 1

anyOf variant 1: Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options..

- Value shape: string. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.product_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.product_id variant 1

anyOf variant 1: Identifier of the product the offered swap variant belongs to..

- Value shape: string. Identifier of the product the offered swap variant belongs to. Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product the offered swap variant belongs to. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option values that identify the variant, such as size and color. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options-variant-1-fields-1).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.sku

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.sku variant 1

anyOf variant 1: SKU of the variant. Omitted when it has none..

- Value shape: string. SKU of the variant. Omitted when it has none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant. Omitted when it has none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.variant_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the variant a subscriber can swap to..

- Value shape: string. ID of the variant a subscriber can swap to. ID of the variant a subscriber can swap to. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant a subscriber can swap to. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax

How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Conditional | string or null | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-variant-1line_item_tax_category). |
| `taxable` | Conditional | boolean or null | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. `taxable`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items-variant-1-fields-1tax-variant-1taxable). |

#### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax line_item_tax_category values

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

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1

anyOf OrderLineItemTaxPreviousAttributes.

- Optional: `line_item_tax_category`, `taxable`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 2

anyOf variant 2.

- Undeclared: `line_item_tax_category`, `taxable`.
- Value shape: null. How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category variant 1

anyOf variant 1: Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category..

- Value shape: string. Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.taxable

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.taxable variant 1

anyOf variant 1: Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category..

- Value shape: boolean. Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.tax variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 1.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.variant_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line sells. Present on a variant line..

- Value shape: string. ID of the catalog variant the line sells. Present on a variant line. ID of the catalog variant the line sells. Present on a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line sells. Present on a variant line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 2.type

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 2.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 2.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 2.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1.[] fields 1 variant 3.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.name

### ExpandedSubscriptionPlanSummaryPreviousAttributes.name variant 1

anyOf variant 1: Name of the plan. Buyers see it at checkout and on their subscription..

- Value shape: string. Name of the plan. Buyers see it at checkout and on their subscription. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the plan. Buyers see it at checkout and on their subscription. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.status

### ExpandedSubscriptionPlanSummaryPreviousAttributes.status variant 1

anyOf variant 1: Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}..

- Value shape: string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.subscription_plan_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: Unique identifier for this subscription plan, prefixed `plan_`..

- Value shape: string. Unique identifier for this subscription plan, prefixed `plan_`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan, prefixed `plan_`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days

### ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days variant 1

anyOf variant 1: Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial..

- Value shape: integer. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: `int32`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

