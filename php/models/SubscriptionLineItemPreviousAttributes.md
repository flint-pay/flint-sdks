[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the frozen terms allow the buyer to adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesallow_quantity_adjustment). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of a bundle line, recorded when the line joined the subscription. `bundle_components`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line bills. Present on `bundle` lines. `bundle_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item, recorded when the line joined the subscription. `categories`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributescategories). |
| `description` | Optional | string or null | Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. `description`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesdescription). |
| `image` | Optional | Alternative shapes (see declared variants) | Image of the item, recorded when the line joined the subscription. `image`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesimage). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesmin_quantity). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. `name`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesname). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. `sku`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessku). |
| `subscription_id` | Optional | string or null | Subscription that owns this line, including frozen lines in a scheduled plan change. `subscription_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_id). |
| `subscription_line_item_id` | Optional | string or null | Unique identifier for this subscription line item, prefixed `sli_`. `subscription_line_item_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_line_item_id). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. `subscription_offer_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_offer_id). |
| `subscription_plan_line_item_id` | Optional | string or null | ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributessubscription_plan_line_item_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. `variant_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributesvariant_id). |

### SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment

### SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the frozen terms allow the buyer to adjust this line quantity..

- Value shape: boolean. Whether the frozen terms allow the buyer to adjust this line quantity. 

### SubscriptionLineItemPreviousAttributes.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the frozen terms allow the buyer to adjust this line quantity. 

### SubscriptionLineItemPreviousAttributes.bundle_components

### SubscriptionLineItemPreviousAttributes.bundle_components variant 1

anyOf variant 1: Components of a bundle line, recorded when the line joined the subscription..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components of a bundle line, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of a bundle line, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.bundle_components variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents-variant-1-fields-1).

### SubscriptionLineItemPreviousAttributes.bundle_id

### SubscriptionLineItemPreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the bundle the line bills. Present on `bundle` lines..

- Value shape: string. ID of the bundle the line bills. Present on `bundle` lines. 

### SubscriptionLineItemPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line bills. Present on `bundle` lines. 

### SubscriptionLineItemPreviousAttributes.categories

### SubscriptionLineItemPreviousAttributes.categories variant 1

anyOf variant 1: Catalog categories of the item, recorded when the line joined the subscription..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.categories variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories-variant-1-fields-1).

### SubscriptionLineItemPreviousAttributes.description

### SubscriptionLineItemPreviousAttributes.description variant 1

anyOf variant 1: Description of the item, recorded when the line joined the subscription. Omitted when none was recorded..

- Value shape: string. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. 

### SubscriptionLineItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. 

### SubscriptionLineItemPreviousAttributes.image

Image of the item, recorded when the line joined the subscription.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1image).

### SubscriptionLineItemPreviousAttributes.image variant 1

anyOf ImagePreviousAttributes.

- Optional: `alt`, `height`, `url`, `width`.

### SubscriptionLineItemPreviousAttributes.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `height`, `url`, `width`.
- Value shape: null. Image of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributes.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### SubscriptionLineItemPreviousAttributes.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### SubscriptionLineItemPreviousAttributes.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### SubscriptionLineItemPreviousAttributes.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### SubscriptionLineItemPreviousAttributes.max_quantity

### SubscriptionLineItemPreviousAttributes.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### SubscriptionLineItemPreviousAttributes.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionLineItemPreviousAttributes.min_quantity

### SubscriptionLineItemPreviousAttributes.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### SubscriptionLineItemPreviousAttributes.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionLineItemPreviousAttributes.modifiers

Declared alternatives: [OrderLineItemPreviousAttributes.modifiers](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers).

### SubscriptionLineItemPreviousAttributes.name

### SubscriptionLineItemPreviousAttributes.name variant 1

anyOf variant 1: Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it..

- Value shape: string. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. 

### SubscriptionLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. 

### SubscriptionLineItemPreviousAttributes.product_id

Declared alternatives: [OrderLineItemPreviousAttributes.product_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id).

### SubscriptionLineItemPreviousAttributes.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### SubscriptionLineItemPreviousAttributes.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### SubscriptionLineItemPreviousAttributes.sku

### SubscriptionLineItemPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the item, recorded when the line joined the subscription. Omitted when the item has none..

- Value shape: string. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. 

### SubscriptionLineItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. 

### SubscriptionLineItemPreviousAttributes.subscription_id

### SubscriptionLineItemPreviousAttributes.subscription_id variant 1

anyOf variant 1: Subscription that owns this line, including frozen lines in a scheduled plan change..

- Value shape: string. Subscription that owns this line, including frozen lines in a scheduled plan change. 

### SubscriptionLineItemPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription that owns this line, including frozen lines in a scheduled plan change. 

### SubscriptionLineItemPreviousAttributes.subscription_line_item_id

### SubscriptionLineItemPreviousAttributes.subscription_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription line item, prefixed `sli_`..

- Value shape: string. Unique identifier for this subscription line item, prefixed `sli_`. 

### SubscriptionLineItemPreviousAttributes.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription line item, prefixed `sli_`. 

### SubscriptionLineItemPreviousAttributes.subscription_offer_id

### SubscriptionLineItemPreviousAttributes.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributes.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributes.subscription_plan_line_item_id

### SubscriptionLineItemPreviousAttributes.subscription_plan_line_item_id variant 1

anyOf variant 1: ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributes.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributes.type

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type).

### SubscriptionLineItemPreviousAttributes.variant_id

### SubscriptionLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it..

- Value shape: string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. 

### SubscriptionLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. 

