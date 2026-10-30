[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderLineItemInput

An item purchased in an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Required | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. |
| `bundle_id` | Optional | string |  |
| `categories` | Required | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesInput](../models/OrderLineItemFulfillmentQuantitiesInput.md#orderlineitemfulfillmentquantitiesinput) | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirementsInput](../models/OrderLineItemFulfillmentRequirementsInput.md#orderlineitemfulfillmentrequirementsinput) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshotInput](../models/GiftCardPurchaseSnapshotInput.md#giftcardpurchasesnapshotinput) | The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inventory_snapshot` | Required | [LineItemInventorySnapshotInput](../models/LineItemInventorySnapshotInput.md#lineiteminventorysnapshotinput) or null |  |
| `modifier_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Required | Array of [BuyerOrderLineItemModifierInput](../models/BuyerOrderLineItemModifierInput.md#buyerorderlineitemmodifierinput) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `purchased_gift_cards` | Required | Array of [PurchasedGiftCardInput](../models/PurchasedGiftCardInput.md#purchasedgiftcardinput) | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `subscription` | Optional | [SubscribedLineInput](../models/SubscribedLineInput.md#subscribedlineinput) | Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount. |
| `subscription_id` | Optional | string | Subscription created for this line after the order is paid. |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummaryInput](../models/OrderLineSubscriptionOfferSummaryInput.md#orderlinesubscriptionoffersummaryinput) | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedLineItemTaxInput](../models/OrderCalculatedLineItemTaxInput.md#ordercalculatedlineitemtaxinput) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax calculated for this line item, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Subtotal minus discounts, plus tax that is not already included in the price. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string |  |

