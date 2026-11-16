[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionScheduledPlanChangePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of target billing_interval units between charges. `billing_interval_count`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval_count). |
| `effective_at` | Optional | string or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. `effective_at`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributeseffective_at). |
| `line_items` | Optional | Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes) or null | Frozen target lines, including buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items). |
| `recurring_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Frozen item subtotal per target billing period, before discounts, shipping, and tax. |
| `requested_by` | Optional | string or null | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. `requested_by`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesrequested_by). |
| `scheduled_at` | Optional | string or null | When the plan change was scheduled. `scheduled_at`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesscheduled_at). |
| `subscription_plan_id` | Optional | string or null | The scheduled target subscription plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributessubscription_plan_id). |

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval variant 1

anyOf variant 1: The frozen target billing interval..

- Value shape: string. The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. The frozen target billing interval. 

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of target billing_interval units between charges..

- Value shape: integer. Number of target billing_interval units between charges. Number of target billing_interval units between charges. Format: `int32`. 

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of target billing_interval units between charges. 

### SubscriptionScheduledPlanChangePreviousAttributes.effective_at

### SubscriptionScheduledPlanChangePreviousAttributes.effective_at variant 1

anyOf variant 1: Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date..

- Value shape: string. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. 

### SubscriptionScheduledPlanChangePreviousAttributes.effective_at variant 2

anyOf variant 2.

- Value shape: null. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1

anyOf variant 1: Frozen target lines, including buyer quantity permissions and bounds..

- Value shape: Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes). Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the frozen terms allow the buyer to adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesallow_quantity_adjustment). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of a bundle line, recorded when the line joined the subscription. `bundle_components`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line bills. Present on `bundle` lines. `bundle_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item, recorded when the line joined the subscription. `categories`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributescategories). |
| `description` | Optional | string or null | Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. `description`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesdescription). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item, recorded when the line joined the subscription. |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmin_quantity). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. `name`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesname). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. `sku`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessku). |
| `subscription_id` | Optional | string or null | Subscription that owns this line, including frozen lines in a scheduled plan change. `subscription_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1subscription_id). |
| `subscription_line_item_id` | Optional | string or null | Unique identifier for this subscription line item, prefixed `sli_`. `subscription_line_item_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1subscription_line_item_id). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. `subscription_offer_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1subscription_offer_id). |
| `subscription_plan_line_item_id` | Optional | string or null | ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1subscription_plan_line_item_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. `variant_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items-variant-1-fields-1variant_id). |

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment

Declared alternatives: [SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesallow_quantity_adjustment).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.bundle_components

Declared alternatives: [SubscriptionLineItemPreviousAttributes.bundle_components](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_components).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.bundle_id

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the bundle the line bills. Present on `bundle` lines..

- Value shape: string. ID of the bundle the line bills. Present on `bundle` lines. ID of the bundle the line bills. Present on `bundle` lines. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line bills. Present on `bundle` lines. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.categories

Declared alternatives: [SubscriptionLineItemPreviousAttributes.categories](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributescategories).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.description

Declared alternatives: [SubscriptionLineItemPreviousAttributes.description](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesdescription).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.max_quantity

Declared alternatives: [SubscriptionLineItemPreviousAttributes.max_quantity](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmax_quantity).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.min_quantity

Declared alternatives: [SubscriptionLineItemPreviousAttributes.min_quantity](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmin_quantity).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [OrderLineItemPreviousAttributes.modifiers](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [SubscriptionLineItemPreviousAttributes.name](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesname).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.product_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.sku

Declared alternatives: [SubscriptionLineItemPreviousAttributes.sku](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessku).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_id

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_id variant 1

anyOf variant 1: Subscription that owns this line, including frozen lines in a scheduled plan change..

- Value shape: string. Subscription that owns this line, including frozen lines in a scheduled plan change. Subscription that owns this line, including frozen lines in a scheduled plan change. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription that owns this line, including frozen lines in a scheduled plan change. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_line_item_id

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription line item, prefixed `sli_`..

- Value shape: string. Unique identifier for this subscription line item, prefixed `sli_`. Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription line item, prefixed `sli_`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_offer_id

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.type

Declared alternatives: [InvoiceLineItemPreviousAttributes.type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype).

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.variant_id

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it..

- Value shape: string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. 

### SubscriptionScheduledPlanChangePreviousAttributes.requested_by

### SubscriptionScheduledPlanChangePreviousAttributes.requested_by variant 1

anyOf variant 1: Who scheduled the plan change..

- Value shape: string. Who scheduled the plan change. Values: `"buyer"`, `"merchant"`.

### SubscriptionScheduledPlanChangePreviousAttributes.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who scheduled the plan change. 

### SubscriptionScheduledPlanChangePreviousAttributes.scheduled_at

### SubscriptionScheduledPlanChangePreviousAttributes.scheduled_at variant 1

anyOf variant 1: When the plan change was scheduled..

- Value shape: string. When the plan change was scheduled. When the plan change was scheduled. Format: `date-time`. 

### SubscriptionScheduledPlanChangePreviousAttributes.scheduled_at variant 2

anyOf variant 2.

- Value shape: null. When the plan change was scheduled. 

### SubscriptionScheduledPlanChangePreviousAttributes.subscription_plan_id

### SubscriptionScheduledPlanChangePreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: The scheduled target subscription plan..

- Value shape: string. The scheduled target subscription plan. The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. 

### SubscriptionScheduledPlanChangePreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. The scheduled target subscription plan. 

