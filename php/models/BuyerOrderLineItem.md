[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderLineItem

An item purchased in an order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantities](../models/OrderLineItemFulfillmentQuantities.md#orderlineitemfulfillmentquantities) | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirements](../models/OrderLineItemFulfillmentRequirements.md#orderlineitemfulfillmentrequirements) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshot](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshot) | The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient. `gift_card_purchase`: [field definitions](../models/OrderLineItem.md#orderlineitemgift_card_purchase). |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inventory_snapshot` | Required | [LineItemInventorySnapshot](../models/LineItemInventorySnapshot.md#lineiteminventorysnapshot) or null |  |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Required | Array of [BuyerOrderLineItemModifier](../models/BuyerOrderLineItemModifier.md#buyerorderlineitemmodifier) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `purchased_gift_cards` | Required | Array of [PurchasedGiftCard](../models/PurchasedGiftCard.md#purchasedgiftcard) | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `subscription` | Optional | [SubscribedLine](../models/SubscribedLine.md#subscribedline) | Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount. |
| `subscription_id` | Optional | string | Subscription created for this line after the order is paid. |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummary](../models/OrderLineSubscriptionOfferSummary.md#orderlinesubscriptionoffersummary) | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string |  |

### BuyerOrderLineItem.gift_card_purchase

Field definitions: [OrderLineItem.gift_card_purchase](../models/OrderLineItem.md#orderlineitemgift_card_purchase).

