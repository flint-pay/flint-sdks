[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderLineItem

An item purchased in an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `base_subtotal_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitembase_subtotal_money). |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. |
| `bundle_id` | Optional | string |  |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemdiscount_money). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantities](../models/OrderLineItemFulfillmentQuantities.md#orderlineitemfulfillmentquantities) | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirements](../models/OrderLineItemFulfillmentRequirements.md#orderlineitemfulfillmentrequirements) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshot](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshot) | The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient. |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inventory_snapshot` | Required | [LineItemInventorySnapshot](../models/LineItemInventorySnapshot.md#lineiteminventorysnapshot) or null |  |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `modifier_total_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemmodifier_total_money). |
| `modifiers` | Required | Array of [BuyerOrderLineItemModifier](../models/BuyerOrderLineItemModifier.md#buyerorderlineitemmodifier) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `purchased_gift_cards` | Required | Array of [PurchasedGiftCard](../models/PurchasedGiftCard.md#purchasedgiftcard) | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `refunded_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `subscription` | Optional | [SubscribedLine](../models/SubscribedLine.md#subscribedline) | Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount. |
| `subscription_id` | Optional | string | Subscription created for this line after the order is paid. |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummary](../models/OrderLineSubscriptionOfferSummary.md#orderlinesubscriptionoffersummary) | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemsubtotal_money). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. `tax`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtax). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for this line item, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Subtotal minus discounts, plus tax that is not already included in the price. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtotal_money). |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string |  |

### BuyerOrderLineItem.base_subtotal_money

Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderLineItem.discount_money

Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderLineItem.modifier_total_money

Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderLineItem.refunded_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerOrderLineItem.subtotal_money

Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderLineItem.tax

Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. `calculation`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#buyerorderlineitemtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### BuyerOrderLineItem.tax line_item_tax_category values

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

### BuyerOrderLineItem.tax.calculation

Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | minItems: `1`. `components[]`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponents). |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

### BuyerOrderLineItem.tax.calculation.components[]

One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | A taxing jurisdiction with its level, such as state or city, name, state, and country. `jurisdiction`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### BuyerOrderLineItem.tax.calculation.components[].flat_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerOrderLineItem.tax.calculation.components[].jurisdiction

A taxing jurisdiction with its level, such as state or city, name, state, and country.

Field definitions: [shared fields](TaxJurisdictionInput.md#taxjurisdictioninput).

### BuyerOrderLineItem.tax_money

Tax calculated for this line item, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerOrderLineItem.total_money

Subtotal minus discounts, plus tax that is not already included in the price. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### BuyerOrderLineItem.unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

