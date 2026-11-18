[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Optional | integer or null | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbackordered_quantity). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by quantity, before modifiers, discounts, and tax. `base_subtotal_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbase_subtotal_money). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_id). |
| `catalog_pricing` | Optional | [CatalogPricingPreviousAttributes](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributes) or null | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescategories). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount value allocated to this line item. `discount_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdiscount_money). |
| `expected_ship_date` | Optional | string or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. `expected_ship_date`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesexpected_ship_date). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributes](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributes) or null | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities). |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirementsPreviousAttributes](../models/OrderLineItemFulfillmentRequirementsPreviousAttributes.md#orderlineitemfulfillmentrequirementspreviousattributes) or null | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshotPreviousAttributes](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributes) or null | Gift card details for a gift card purchase line. |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `inventory_snapshot` | Optional | [LineItemInventorySnapshotPreviousAttributes](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributes) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. |
| `license_key_quantity` | Optional | integer or null | Number of license keys promised by this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid arrives. Whole-number quantity; fractional quantities are not supported. `license_key_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributeslicense_key_quantity). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line item's modifier totals. `modifier_total_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifier_total_money). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_edit_id` | Optional | string or null | The edit that added this line. Null when the line was not added by an order edit. `order_edit_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | Unique identifier for this order line item, prefixed `li_`. `order_line_item_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesorder_line_item_id). |
| `payment_link_line_item_key` | Optional | string or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. `payment_link_line_item_key`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespayment_link_line_item_key). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type). |
| `purchased_gift_cards` | Optional | Array of [PurchasedGiftCardPreviousAttributes](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributes) or null | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `refundable` | Optional | [OrderLineItemRefundablePreviousAttributes](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributes) or null | Remaining quantity and components for an ID-only line refund target. Accounts for original-tender capacity, reversals, accepted refunds, and whole-value edit reservations, including credit transferred to added lines and pending or retryable failed edit refunds. All values are zero when exhausted. Refund eligibility is checked again on submission. |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of this line already refunded. `refunded_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesrefunded_money). |
| `refunded_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `refunded_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `release_date` | Optional | string or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. `release_date`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesrelease_date). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. `removed_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesremoved_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessku). |
| `subscription` | Optional | [SubscribedLinePreviousAttributes](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributes) or null | Recurring offer and cadence frozen for this line at signup. |
| `subscription_id` | Optional | string or null | Subscription created for this line after the order is paid. `subscription_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_id). |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummaryPreviousAttributes](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributes) or null | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. `subtotal_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubtotal_money). |
| `tax` | Optional | [OrderCalculatedLineItemTaxPreviousAttributes](../models/OrderCalculatedLineItemTaxPreviousAttributes.md#ordercalculatedlineitemtaxpreviousattributes) or null | How tax was calculated for this line item. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for this line item, including any tax already included in its price. `tax_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discounts, plus tax that is not already included in the price. `total_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestotal_money). |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. `unit_price_money`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_price_money). |
| `unit_weight` | Optional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id). |

### OrderLineItemPreviousAttributes.backordered_quantity

### OrderLineItemPreviousAttributes.backordered_quantity variant 1

anyOf variant 1: Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. 

### OrderLineItemPreviousAttributes.backordered_quantity variant 2

anyOf variant 2.

- Value shape: null. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. 

### OrderLineItemPreviousAttributes.base_subtotal_money

Unit price multiplied by quantity, before modifiers, discounts, and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.base_subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.base_subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unit price multiplied by quantity, before modifiers, discounts, and tax. 

### OrderLineItemPreviousAttributes.base_subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.base_subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.bundle_components

### OrderLineItemPreviousAttributes.bundle_components variant 1

anyOf variant 1: Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. 

### OrderLineItemPreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. 

### OrderLineItemPreviousAttributes.bundle_id

### OrderLineItemPreviousAttributes.bundle_id variant 1

anyOf variant 1: ID of the bundle the line was sold from..

- Value shape: string. ID of the bundle the line was sold from. ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### OrderLineItemPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line was sold from. 

### OrderLineItemPreviousAttributes.categories

### OrderLineItemPreviousAttributes.categories variant 1

anyOf variant 1: Catalog categories of the item..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the item. 

### OrderLineItemPreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the item. 

### OrderLineItemPreviousAttributes.description

### OrderLineItemPreviousAttributes.description variant 1

anyOf variant 1: Description of the item as sold..

- Value shape: string. Description of the item as sold. 

### OrderLineItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the item as sold. 

### OrderLineItemPreviousAttributes.discount_money

Discount value allocated to this line item.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Discount value allocated to this line item. 

### OrderLineItemPreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.expected_ship_date

### OrderLineItemPreviousAttributes.expected_ship_date variant 1

anyOf variant 1: Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted..

- Value shape: string. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderLineItemPreviousAttributes.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. 

### OrderLineItemPreviousAttributes.fulfillment_quantities

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1

anyOf variant 1: Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements..

- Value shape: Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributes](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributes). Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. 

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 2

anyOf variant 2.

- Value shape: null. Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. 

### OrderLineItemPreviousAttributes.license_key_quantity

### OrderLineItemPreviousAttributes.license_key_quantity variant 1

anyOf variant 1: Number of license keys promised by this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid arrives. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Number of license keys promised by this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid arrives. Whole-number quantity; fractional quantities are not supported. Number of license keys promised by this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid arrives. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. 

### OrderLineItemPreviousAttributes.license_key_quantity variant 2

anyOf variant 2.

- Value shape: null. Number of license keys promised by this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid arrives. Whole-number quantity; fractional quantities are not supported. 

### OrderLineItemPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### OrderLineItemPreviousAttributes.modifier_total_money

Sum of the line item's modifier totals.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.modifier_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.modifier_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Sum of the line item's modifier totals. 

### OrderLineItemPreviousAttributes.modifier_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.modifier_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.modifiers

### OrderLineItemPreviousAttributes.modifiers variant 1

anyOf variant 1: Modifiers selected on the line, with their prices..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifiers selected on the line, with their prices. 

### OrderLineItemPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers selected on the line, with their prices. 

### OrderLineItemPreviousAttributes.name

### OrderLineItemPreviousAttributes.name variant 1

anyOf variant 1: Name of the item as sold..

- Value shape: string. Name of the item as sold. 

### OrderLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the item as sold. 

### OrderLineItemPreviousAttributes.order_edit_id

### OrderLineItemPreviousAttributes.order_edit_id variant 1

anyOf variant 1: The edit that added this line. Null when the line was not added by an order edit..

- Value shape: string. The edit that added this line. Null when the line was not added by an order edit. The edit that added this line. Null when the line was not added by an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### OrderLineItemPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The edit that added this line. Null when the line was not added by an order edit. 

### OrderLineItemPreviousAttributes.order_id

Declared alternatives: [InventoryReservationLinePreviousAttributes.order_id](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_id).

### OrderLineItemPreviousAttributes.order_line_item_id

### OrderLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: Unique identifier for this order line item, prefixed `li_`..

- Value shape: string. Unique identifier for this order line item, prefixed `li_`. Unique identifier for this order line item, prefixed `li_`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderLineItemPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order line item, prefixed `li_`. 

### OrderLineItemPreviousAttributes.payment_link_line_item_key

### OrderLineItemPreviousAttributes.payment_link_line_item_key variant 1

anyOf variant 1: The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link..

- Value shape: string. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: `1`. maxLength: `100`. 

### OrderLineItemPreviousAttributes.payment_link_line_item_key variant 2

anyOf variant 2.

- Value shape: null. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. 

### OrderLineItemPreviousAttributes.product_id

### OrderLineItemPreviousAttributes.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderLineItemPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### OrderLineItemPreviousAttributes.product_type

Declared alternatives: [InvoiceLineItemPreviousAttributes.product_type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type).

### OrderLineItemPreviousAttributes.purchased_gift_cards

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1

anyOf variant 1: Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card..

- Value shape: Array of [PurchasedGiftCardPreviousAttributes](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributes). Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. 

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 2

anyOf variant 2.

- Value shape: null. Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. 

### OrderLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### OrderLineItemPreviousAttributes.refunded_money

Amount of this line already refunded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount of this line already refunded. 

### OrderLineItemPreviousAttributes.refunded_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.refunded_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### OrderLineItemPreviousAttributes.release_date

### OrderLineItemPreviousAttributes.release_date variant 1

anyOf variant 1: Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted..

- Value shape: string. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderLineItemPreviousAttributes.release_date variant 2

anyOf variant 2.

- Value shape: null. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. 

### OrderLineItemPreviousAttributes.removed_quantity

### OrderLineItemPreviousAttributes.removed_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Format: `int64`. 

### OrderLineItemPreviousAttributes.removed_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. 

### OrderLineItemPreviousAttributes.selected_options

### OrderLineItemPreviousAttributes.selected_options variant 1

anyOf variant 1: Variant options selected for the item, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Variant options selected for the item, such as size and color. 

### OrderLineItemPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Variant options selected for the item, such as size and color. 

### OrderLineItemPreviousAttributes.sku

### OrderLineItemPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the item as sold..

- Value shape: string. SKU of the item as sold. 

### OrderLineItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the item as sold. 

### OrderLineItemPreviousAttributes.subscription_id

### OrderLineItemPreviousAttributes.subscription_id variant 1

anyOf variant 1: Subscription created for this line after the order is paid..

- Value shape: string. Subscription created for this line after the order is paid. Subscription created for this line after the order is paid. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### OrderLineItemPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription created for this line after the order is paid. 

### OrderLineItemPreviousAttributes.subtotal_money

Base subtotal plus modifier total, before discounts and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Base subtotal plus modifier total, before discounts and tax. 

### OrderLineItemPreviousAttributes.subtotal_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.tax_money

Tax calculated for this line item, including any tax already included in its price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax calculated for this line item, including any tax already included in its price. 

### OrderLineItemPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.total_money

Subtotal minus discounts, plus tax that is not already included in the price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Subtotal minus discounts, plus tax that is not already included in the price. 

### OrderLineItemPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.type

Declared alternatives: [InvoiceLineItemPreviousAttributes.type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype).

### OrderLineItemPreviousAttributes.unit_price_money

Price of one unit before modifiers, discounts, and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of one unit before modifiers, discounts, and tax. 

### OrderLineItemPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemPreviousAttributes.variant_id

### OrderLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the item was sold from..

- Value shape: string. ID of the catalog variant the item was sold from. ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the item was sold from. 

