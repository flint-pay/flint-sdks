[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the frozen terms allow the buyer to adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputallow_quantity_adjustment). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | Components of a bundle line, recorded when the line joined the subscription. `bundle_components`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line bills. Present on `bundle` lines. `bundle_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | Catalog categories of the item, recorded when the line joined the subscription. `categories`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputcategories). |
| `description` | Optional | string or null | Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. `description`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputdescription). |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Image of the item, recorded when the line joined the subscription. |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputmax_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputmin_quantity). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Sum of the line's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputmodifiers). |
| `name` | Optional | string or null | Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. `name`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputname). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. `sku`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputsku). |
| `subscription_id` | Optional | string or null | Subscription that owns this line, including frozen lines in a scheduled plan change. `subscription_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputsubscription_id). |
| `subscription_line_item_id` | Optional | string or null | Unique identifier for this subscription line item, prefixed `sli_`. `subscription_line_item_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputsubscription_line_item_id). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. `subscription_offer_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputsubscription_offer_id). |
| `subscription_plan_line_item_id` | Optional | string or null | ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. `subscription_plan_line_item_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputsubscription_plan_line_item_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Base subtotal plus modifier total, before discounts and tax. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputtype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. `variant_id`: [declared alternatives](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinputvariant_id). |

### SubscriptionLineItemPreviousAttributesInput.allow_quantity_adjustment

### SubscriptionLineItemPreviousAttributesInput.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the frozen terms allow the buyer to adjust this line quantity..

- Value shape: boolean. Whether the frozen terms allow the buyer to adjust this line quantity. 

### SubscriptionLineItemPreviousAttributesInput.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the frozen terms allow the buyer to adjust this line quantity. 

### SubscriptionLineItemPreviousAttributesInput.bundle_components

### SubscriptionLineItemPreviousAttributesInput.bundle_components variant 1

anyOf variant 1: Components of a bundle line, recorded when the line joined the subscription..

- Value shape: Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput). Components of a bundle line, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributesInput.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of a bundle line, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributesInput.bundle_id

### SubscriptionLineItemPreviousAttributesInput.bundle_id variant 1

anyOf variant 1: ID of the bundle the line bills. Present on `bundle` lines..

- Value shape: string. ID of the bundle the line bills. Present on `bundle` lines. ID of the bundle the line bills. Present on `bundle` lines. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### SubscriptionLineItemPreviousAttributesInput.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line bills. Present on `bundle` lines. 

### SubscriptionLineItemPreviousAttributesInput.categories

### SubscriptionLineItemPreviousAttributesInput.categories variant 1

anyOf variant 1: Catalog categories of the item, recorded when the line joined the subscription..

- Value shape: Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput). Catalog categories of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributesInput.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the item, recorded when the line joined the subscription. 

### SubscriptionLineItemPreviousAttributesInput.description

### SubscriptionLineItemPreviousAttributesInput.description variant 1

anyOf variant 1: Description of the item, recorded when the line joined the subscription. Omitted when none was recorded..

- Value shape: string. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. 

### SubscriptionLineItemPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. 

### SubscriptionLineItemPreviousAttributesInput.max_quantity

### SubscriptionLineItemPreviousAttributesInput.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### SubscriptionLineItemPreviousAttributesInput.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionLineItemPreviousAttributesInput.min_quantity

### SubscriptionLineItemPreviousAttributesInput.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### SubscriptionLineItemPreviousAttributesInput.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. 

### SubscriptionLineItemPreviousAttributesInput.modifiers

Declared alternatives: [OrderLineItemPreviousAttributesInput.modifiers](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputmodifiers).

### SubscriptionLineItemPreviousAttributesInput.name

### SubscriptionLineItemPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it..

- Value shape: string. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. 

### SubscriptionLineItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. 

### SubscriptionLineItemPreviousAttributesInput.product_id

Declared alternatives: [OrderLineItemPreviousAttributesInput.product_id](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputproduct_id).

### SubscriptionLineItemPreviousAttributesInput.quantity

Declared alternatives: [BundleComponentPreviousAttributesInput.quantity](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity).

### SubscriptionLineItemPreviousAttributesInput.selected_options

Declared alternatives: [OrderLineItemPreviousAttributesInput.selected_options](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options).

### SubscriptionLineItemPreviousAttributesInput.sku

### SubscriptionLineItemPreviousAttributesInput.sku variant 1

anyOf variant 1: SKU of the item, recorded when the line joined the subscription. Omitted when the item has none..

- Value shape: string. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. 

### SubscriptionLineItemPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. 

### SubscriptionLineItemPreviousAttributesInput.subscription_id

### SubscriptionLineItemPreviousAttributesInput.subscription_id variant 1

anyOf variant 1: Subscription that owns this line, including frozen lines in a scheduled plan change..

- Value shape: string. Subscription that owns this line, including frozen lines in a scheduled plan change. Subscription that owns this line, including frozen lines in a scheduled plan change. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### SubscriptionLineItemPreviousAttributesInput.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription that owns this line, including frozen lines in a scheduled plan change. 

### SubscriptionLineItemPreviousAttributesInput.subscription_line_item_id

### SubscriptionLineItemPreviousAttributesInput.subscription_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription line item, prefixed `sli_`..

- Value shape: string. Unique identifier for this subscription line item, prefixed `sli_`. Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. 

### SubscriptionLineItemPreviousAttributesInput.subscription_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription line item, prefixed `sli_`. 

### SubscriptionLineItemPreviousAttributesInput.subscription_offer_id

### SubscriptionLineItemPreviousAttributesInput.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### SubscriptionLineItemPreviousAttributesInput.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributesInput.subscription_plan_line_item_id

### SubscriptionLineItemPreviousAttributesInput.subscription_plan_line_item_id variant 1

anyOf variant 1: ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly..

- Value shape: string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### SubscriptionLineItemPreviousAttributesInput.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. 

### SubscriptionLineItemPreviousAttributesInput.type

Declared alternatives: [InvoiceLineItemPreviousAttributesInput.type](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputtype).

### SubscriptionLineItemPreviousAttributesInput.variant_id

### SubscriptionLineItemPreviousAttributesInput.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it..

- Value shape: string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionLineItemPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. 

