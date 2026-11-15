[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItem

An item included in a customer's recurring purchase.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the frozen terms allow the buyer to adjust this line quantity. |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `base_subtotal_money`: [field definitions](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitembase_subtotal_money). |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components of a bundle line, recorded when the line joined the subscription. |
| `bundle_id` | Optional | string | ID of the bundle the line bills. Present on `bundle` lines. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Catalog categories of the item, recorded when the line joined the subscription. |
| `description` | Optional | string | Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item, recorded when the line joined the subscription. An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the line's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `modifier_total_money`: [field definitions](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitemmodifier_total_money). |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | Modifiers selected on the line, with their prices. |
| `name` | Required | string | Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. |
| `sku` | Optional | string | SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. |
| `subscription_id` | Required | string | Subscription that owns this line, including frozen lines in a scheduled plan change. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_line_item_id` | Optional | string | Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `subscription_offer_id` | Optional | string | ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |
| `subscription_plan_line_item_id` | Optional | string | ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemsubtotal_money). |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitemunit_price_money). |
| `variant_id` | Optional | string | ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### SubscriptionLineItem.base_subtotal_money

Field definitions: [BuyerSubscriptionLineItem.base_subtotal_money](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitembase_subtotal_money).

### SubscriptionLineItem.modifier_total_money

Field definitions: [BuyerSubscriptionLineItem.modifier_total_money](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitemmodifier_total_money).

### SubscriptionLineItem.subtotal_money

Field definitions: [BuyerOrderLineItem.subtotal_money](../models/BuyerOrderLineItem.md#buyerorderlineitemsubtotal_money).

### SubscriptionLineItem.unit_price_money

Field definitions: [BuyerSubscriptionLineItem.unit_price_money](../models/BuyerSubscriptionLineItem.md#buyersubscriptionlineitemunit_price_money).

