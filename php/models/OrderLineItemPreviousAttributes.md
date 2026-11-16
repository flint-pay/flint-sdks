[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Optional | integer or null | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbackordered_quantity). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by quantity, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id). |
| `catalog_pricing` | Optional | [CatalogPricingPreviousAttributes](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributes) or null | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. `catalog_pricing`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount value allocated to this line item. |
| `expected_ship_date` | Optional | string or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. `expected_ship_date`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesexpected_ship_date). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributes](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributes) or null | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities). |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirementsPreviousAttributes](../models/OrderLineItemFulfillmentRequirementsPreviousAttributes.md#orderlineitemfulfillmentrequirementspreviousattributes) or null | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshotPreviousAttributes](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributes) or null | Gift card details for a gift card purchase line. |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `inventory_snapshot` | Optional | [LineItemInventorySnapshotPreviousAttributes](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributes) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line item's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_edit_id` | Optional | string or null | The edit that added this line. Null when the line was not added by an order edit. `order_edit_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | Unique identifier for this order line item, prefixed `li_`. `order_line_item_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesorder_line_item_id). |
| `payment_link_line_item_key` | Optional | string or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. `payment_link_line_item_key`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespayment_link_line_item_key). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type). |
| `purchased_gift_cards` | Optional | Array of [PurchasedGiftCardPreviousAttributes](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributes) or null | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of this line already refunded. |
| `refunded_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `refunded_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `release_date` | Optional | string or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. `release_date`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesrelease_date). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. `removed_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesremoved_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `subscription` | Optional | [SubscribedLinePreviousAttributes](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributes) or null | Recurring offer and cadence frozen for this line at signup. `subscription`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription). |
| `subscription_id` | Optional | string or null | Subscription created for this line after the order is paid. `subscription_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_id). |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummaryPreviousAttributes](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributes) or null | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. `subscription_offer`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `tax` | Optional | [OrderCalculatedLineItemTaxPreviousAttributes](../models/OrderCalculatedLineItemTaxPreviousAttributes.md#ordercalculatedlineitemtaxpreviousattributes) or null | How tax was calculated for this line item. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for this line item, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discounts, plus tax that is not already included in the price. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. |
| `unit_weight` | Optional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id). |

### OrderLineItemPreviousAttributes.backordered_quantity

### OrderLineItemPreviousAttributes.backordered_quantity variant 1

anyOf variant 1: Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. 

### OrderLineItemPreviousAttributes.backordered_quantity variant 2

anyOf variant 2.

- Value shape: null. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. 

### OrderLineItemPreviousAttributes.bundle_components

### OrderLineItemPreviousAttributes.bundle_components variant 1

anyOf variant 1: Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. 

### OrderLineItemPreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. 

### OrderLineItemPreviousAttributes.bundle_components variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents-variant-1-fields-1).

### OrderLineItemPreviousAttributes.bundle_id

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.bundle_id](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id).

### OrderLineItemPreviousAttributes.catalog_pricing

Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Conditional | integer or null | Minimum quantity of the applied break. Null when the base price applies. `minimum_quantity`: [declared alternatives](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributesminimum_quantity). |
| `price_list_id` | Conditional | string or null | Price list providing the selected schedule. Null when the variant's default schedule applies. `price_list_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing-variant-1price_list_id). |
| `source` | Conditional | string or null | Source of the selected schedule. New source values may be added. Values: `"variant"`, `"price_list"`. `source`: [declared alternatives](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributessource). |

### OrderLineItemPreviousAttributes.catalog_pricing variant 1

anyOf CatalogPricingPreviousAttributes.

- Optional: `minimum_quantity`, `price_list_id`, `source`.

### OrderLineItemPreviousAttributes.catalog_pricing variant 2

anyOf variant 2.

- Undeclared: `minimum_quantity`, `price_list_id`, `source`.
- Value shape: null. Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.minimum_quantity

Declared alternatives: [CatalogPricingPreviousAttributes.minimum_quantity](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributesminimum_quantity).

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.price_list_id

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.price_list_id variant 1

anyOf variant 1: Price list providing the selected schedule. Null when the variant's default schedule applies..

- Value shape: string. Price list providing the selected schedule. Null when the variant's default schedule applies. Price list providing the selected schedule. Null when the variant's default schedule applies. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.price_list_id variant 2

anyOf variant 2.

- Value shape: null. Price list providing the selected schedule. Null when the variant's default schedule applies. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.source

Declared alternatives: [CatalogPricingPreviousAttributes.source](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributessource).

### OrderLineItemPreviousAttributes.categories

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.categories](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories).

### OrderLineItemPreviousAttributes.description

### OrderLineItemPreviousAttributes.description variant 1

anyOf variant 1: Description of the item as sold..

- Value shape: string. Description of the item as sold. 

### OrderLineItemPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the item as sold. 

### OrderLineItemPreviousAttributes.expected_ship_date

### OrderLineItemPreviousAttributes.expected_ship_date variant 1

anyOf variant 1: Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted..

- Value shape: string. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. 

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

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `assigned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. `assigned_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesassigned_quantity). |
| `bundle_component_id` | Optional | string or null | ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. `bundle_component_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities-variant-1-fields-1bundle_component_id). |
| `canceled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. `canceled_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributescanceled_quantity). |
| `failed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. `failed_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesfailed_quantity). |
| `fulfilled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. `fulfilled_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesfulfilled_quantity). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. `removed_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesremoved_quantity). |
| `required_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. `required_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesrequired_quantity). |
| `unassigned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. `unassigned_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesunassigned_quantity). |

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.assigned_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.assigned_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesassigned_quantity).

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.bundle_component_id

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component these quantities describe. `null` when the line isn't a bundle component..

- Value shape: string. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. 

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.canceled_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.canceled_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributescanceled_quantity).

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.failed_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.failed_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesfailed_quantity).

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.fulfilled_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.fulfilled_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesfulfilled_quantity).

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.removed_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.removed_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesremoved_quantity).

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.required_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.required_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesrequired_quantity).

### OrderLineItemPreviousAttributes.fulfillment_quantities variant 1.[] fields 1.unassigned_quantity

Declared alternatives: [OrderLineItemFulfillmentQuantitiesPreviousAttributes.unassigned_quantity](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesunassigned_quantity).

### OrderLineItemPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderLineItemPreviousAttributes.modifiers

### OrderLineItemPreviousAttributes.modifiers variant 1

anyOf variant 1: Modifiers selected on the line, with their prices..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifiers selected on the line, with their prices. 

### OrderLineItemPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers selected on the line, with their prices. 

### OrderLineItemPreviousAttributes.modifiers variant 1.[] fields 1

Field definitions: [FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1).

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

- Value shape: string. The edit that added this line. Null when the line was not added by an order edit. 

### OrderLineItemPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The edit that added this line. Null when the line was not added by an order edit. 

### OrderLineItemPreviousAttributes.order_id

Declared alternatives: [InventoryReservationLinePreviousAttributes.order_id](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_id).

### OrderLineItemPreviousAttributes.order_line_item_id

### OrderLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: Unique identifier for this order line item, prefixed `li_`..

- Value shape: string. Unique identifier for this order line item, prefixed `li_`. 

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

- Value shape: string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

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

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card issued for the purchased unit. `gift_card_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards-variant-1-fields-1gift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4). |
| `original_gift_card_id` | Optional | string or null | ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. `original_gift_card_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards-variant-1-fields-1original_gift_card_id). |
| `restoration_reason` | Optional | string or null | What restored the reversed value onto a replacement card. Values: `"manual_recollection"`, `"processor_recollection"`. `restoration_reason`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesrestoration_reason). |
| `unit_ordinal` | Optional | integer or null | Which unit of the line item's quantity this card was issued for, starting at 1. `unit_ordinal`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesunit_ordinal). |

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.gift_card_id

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card issued for the purchased unit..

- Value shape: string. ID of the gift card issued for the purchased unit. ID of the gift card issued for the purchased unit. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card issued for the purchased unit. 

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.last4

Declared alternatives: [PaymentAttemptGiftCardRedemptionPreviousAttributes.last4](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4).

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.original_gift_card_id

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.original_gift_card_id variant 1

anyOf variant 1: ID of the card that this card replaces. Set when restoring reversed value needed a replacement card..

- Value shape: string. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.original_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. 

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.restoration_reason

Declared alternatives: [PurchasedGiftCardPreviousAttributes.restoration_reason](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesrestoration_reason).

### OrderLineItemPreviousAttributes.purchased_gift_cards variant 1.[] fields 1.unit_ordinal

Declared alternatives: [PurchasedGiftCardPreviousAttributes.unit_ordinal](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesunit_ordinal).

### OrderLineItemPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderLineItemPreviousAttributes.refunded_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderLineItemPreviousAttributes.release_date

### OrderLineItemPreviousAttributes.release_date variant 1

anyOf variant 1: Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted..

- Value shape: string. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. 

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

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### OrderLineItemPreviousAttributes.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

### OrderLineItemPreviousAttributes.subscription

Recurring offer and cadence frozen for this line at signup.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string or null | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesbilling_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of billing_interval units between charges, from 1 to 365. `billing_interval_count`: [declared alternatives](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesbilling_interval_count). |
| `recurring_amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. |
| `subscription_offer_id` | Conditional | string or null | ID of the subscription offer the line was bought under. `subscription_offer_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription-variant-1subscription_offer_id). |

### OrderLineItemPreviousAttributes.subscription variant 1

anyOf SubscribedLinePreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `recurring_amount_money`, `subscription_offer_id`.

### OrderLineItemPreviousAttributes.subscription variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `recurring_amount_money`, `subscription_offer_id`.
- Value shape: null. Recurring offer and cadence frozen for this line at signup. 

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval

Declared alternatives: [SubscribedLinePreviousAttributes.billing_interval](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesbilling_interval).

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval_count

Declared alternatives: [SubscribedLinePreviousAttributes.billing_interval_count](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesbilling_interval_count).

### OrderLineItemPreviousAttributes.subscription variant 1.subscription_offer_id

### OrderLineItemPreviousAttributes.subscription variant 1.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under..

- Value shape: string. ID of the subscription offer the line was bought under. ID of the subscription offer the line was bought under. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### OrderLineItemPreviousAttributes.subscription variant 1.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. 

### OrderLineItemPreviousAttributes.subscription_id

### OrderLineItemPreviousAttributes.subscription_id variant 1

anyOf variant 1: Subscription created for this line after the order is paid..

- Value shape: string. Subscription created for this line after the order is paid. 

### OrderLineItemPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription created for this line after the order is paid. 

### OrderLineItemPreviousAttributes.subscription_offer

Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. `billing_interval_options`: [declared alternatives](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributesbilling_interval_options). |
| `discount` | Conditional | [OrderLineSubscriptionOfferDiscountPreviousAttributes](../models/OrderLineSubscriptionOfferDiscountPreviousAttributes.md#orderlinesubscriptionofferdiscountpreviousattributes) or null | The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. |
| `name` | Conditional | string or null | Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. `name`: [declared alternatives](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributesname). |
| `subscription_offer_id` | Conditional | string or null | ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. `subscription_offer_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer-variant-1subscription_offer_id). |

### OrderLineItemPreviousAttributes.subscription_offer variant 1

anyOf OrderLineSubscriptionOfferSummaryPreviousAttributes.

- Optional: `billing_interval_options`, `discount`, `name`, `subscription_offer_id`.

### OrderLineItemPreviousAttributes.subscription_offer variant 2

anyOf variant 2.

- Undeclared: `billing_interval_options`, `discount`, `name`, `subscription_offer_id`.
- Value shape: null. Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.billing_interval_options

Declared alternatives: [OrderLineSubscriptionOfferSummaryPreviousAttributes.billing_interval_options](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributesbilling_interval_options).

### OrderLineItemPreviousAttributes.subscription_offer variant 1.name

Declared alternatives: [OrderLineSubscriptionOfferSummaryPreviousAttributes.name](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributesname).

### OrderLineItemPreviousAttributes.subscription_offer variant 1.subscription_offer_id

### OrderLineItemPreviousAttributes.subscription_offer variant 1.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose..

- Value shape: string. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. 

### OrderLineItemPreviousAttributes.type

Declared alternatives: [InvoiceLineItemPreviousAttributes.type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype).

### OrderLineItemPreviousAttributes.variant_id

### OrderLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the item was sold from..

- Value shape: string. ID of the catalog variant the item was sold from. 

### OrderLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the item was sold from. 

