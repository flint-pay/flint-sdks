[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Optional | integer or null | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbackordered_quantity). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by quantity, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id). |
| `catalog_pricing` | Optional | Alternative shapes (see declared variants) | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. `catalog_pricing`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount value allocated to this line item. |
| `expected_ship_date` | Optional | string or null or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. `expected_ship_date`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesexpected_ship_date). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributes](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributes) or null | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities). |
| `fulfillment_requirements` | Optional | Alternative shapes (see declared variants) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. `fulfillment_requirements`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements). |
| `gift_card_purchase` | Optional | Alternative shapes (see declared variants) | Gift card details for a gift card purchase line. `gift_card_purchase`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase). |
| `image` | Optional | Alternative shapes (see declared variants) | Image of the item as sold. `image`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesimage). |
| `inventory_snapshot` | Optional | Alternative shapes (see declared variants) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. `inventory_snapshot`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line item's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_edit_id` | Optional | string or null or null | The edit that added this line. Null when the line was not added by an order edit. `order_edit_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | Unique identifier for this order line item, prefixed `li_`. `order_line_item_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesorder_line_item_id). |
| `payment_link_line_item_key` | Optional | string or null or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. `payment_link_line_item_key`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespayment_link_line_item_key). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesproduct_id). |
| `product_type` | Optional | string or null or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1product_type). |
| `purchased_gift_cards` | Optional | Array of [PurchasedGiftCardPreviousAttributes](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributes) or null | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of this line already refunded. |
| `refunded_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `refunded_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `release_date` | Optional | string or null or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. `release_date`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesrelease_date). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. `removed_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesremoved_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `subscription` | Optional | Alternative shapes (see declared variants) | Recurring offer and cadence frozen for this line at signup. `subscription`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription). |
| `subscription_id` | Optional | string or null | Subscription created for this line after the order is paid. `subscription_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_id). |
| `subscription_offer` | Optional | Alternative shapes (see declared variants) | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. `subscription_offer`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `tax` | Optional | Alternative shapes (see declared variants) | How tax was calculated for this line item. `tax`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestax). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for this line item, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discounts, plus tax that is not already included in the price. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type). |
| `unit_dimensions` | Optional | Alternative shapes (see declared variants) | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. `unit_dimensions`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. |
| `unit_weight` | Optional | Alternative shapes (see declared variants) | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. `unit_weight`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight). |
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
| `minimum_quantity` | Conditional | integer or null or null | Minimum quantity of the applied break. Null when the base price applies. `minimum_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing-variant-1minimum_quantity). |
| `price_list_id` | Conditional | string or null or null | Price list providing the selected schedule. Null when the variant's default schedule applies. `price_list_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing-variant-1price_list_id). |
| `source` | Conditional | string or null | Source of the selected schedule. New source values may be added. Values: `"variant"`, `"price_list"`. `source`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing-variant-1source). |

### OrderLineItemPreviousAttributes.catalog_pricing variant 1

anyOf CatalogPricingPreviousAttributes.

- Optional: `minimum_quantity`, `price_list_id`, `source`.

### OrderLineItemPreviousAttributes.catalog_pricing variant 2

anyOf variant 2.

- Undeclared: `minimum_quantity`, `price_list_id`, `source`.
- Value shape: null. Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.minimum_quantity

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.minimum_quantity variant 1

anyOf variant 1: Minimum quantity of the applied break. Null when the base price applies..

- Value shape: (integer or null). Minimum quantity of the applied break. Null when the base price applies. Minimum quantity of the applied break. Null when the base price applies. Format: `int64`. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.minimum_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum quantity of the applied break. Null when the base price applies. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.price_list_id

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.price_list_id variant 1

anyOf variant 1: Price list providing the selected schedule. Null when the variant's default schedule applies..

- Value shape: (string or null). Price list providing the selected schedule. Null when the variant's default schedule applies. Price list providing the selected schedule. Null when the variant's default schedule applies. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.price_list_id variant 2

anyOf variant 2.

- Value shape: null. Price list providing the selected schedule. Null when the variant's default schedule applies. 

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.source

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.source variant 1

anyOf variant 1: Source of the selected schedule. New source values may be added..

- Value shape: string. Source of the selected schedule. New source values may be added. Values: `"variant"`, `"price_list"`.

### OrderLineItemPreviousAttributes.catalog_pricing variant 1.source variant 2

anyOf variant 2.

- Value shape: null. Source of the selected schedule. New source values may be added. 

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

- Value shape: (string or null). Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. 

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
| `bundle_component_id` | Optional | string or null or null | ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. `bundle_component_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities-variant-1-fields-1bundle_component_id). |
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

- Value shape: (string or null). ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

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

### OrderLineItemPreviousAttributes.fulfillment_requirements

Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Conditional | Array of object or null | Fulfillment requirements for each bundle component. Present for bundle lines. `components`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components). |
| `direct` | Conditional | Alternative shapes (see declared variants) | Fulfillment requirements for a single item. Present for non-bundle lines. `direct`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1direct). |

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1

anyOf OrderLineItemFulfillmentRequirementsPreviousAttributes.

- Optional: `components`, `direct`.

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 2

anyOf variant 2.

- Undeclared: `components`, `direct`.
- Value shape: null. Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1

anyOf variant 1: Fulfillment requirements for each bundle component. Present for bundle lines..

- Value shape: Array of object. Fulfillment requirements for each bundle component. Present for bundle lines. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 2

anyOf variant 2.

- Value shape: null. Fulfillment requirements for each bundle component. Present for bundle lines. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component these requirements apply to. `bundle_component_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1bundle_component_id). |
| `profile` | Optional | Alternative shapes (see declared variants) | Fulfillment requirements for this component. `profile`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1profile). |
| `quantity_per_line_item_unit` | Optional | integer or null | Number of this component per unit of the order line item; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1quantity_per_line_item_unit). |

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.bundle_component_id

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component these requirements apply to..

- Value shape: string. ID of the bundle component these requirements apply to. ID of the bundle component these requirements apply to. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component these requirements apply to. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile

Fulfillment requirements for this component.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Conditional | Array of string or null | Fulfillment types allowed for this item. Empty when fulfillment is not required. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. `allowed_types`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1profile-variant-1allowed_types). |
| `requirement` | Conditional | string or null | Whether this item requires fulfillment. Values: `"none"`, `"required"`. `requirement`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1profile-variant-1requirement). |

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1

anyOf OrderLineItemFulfillmentProfilePreviousAttributes.

- Optional: `allowed_types`, `requirement`.

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 2

anyOf variant 2.

- Undeclared: `allowed_types`, `requirement`.
- Value shape: null. Fulfillment requirements for this component. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.allowed_types

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.allowed_types variant 1

anyOf variant 1: Fulfillment types allowed for this item. Empty when fulfillment is not required..

- Value shape: Array of string. Fulfillment types allowed for this item. Empty when fulfillment is not required. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`.

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Fulfillment types allowed for this item. Empty when fulfillment is not required. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.requirement

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.requirement variant 1

anyOf variant 1: Whether this item requires fulfillment..

- Value shape: string. Whether this item requires fulfillment. Values: `"none"`, `"required"`.

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.requirement variant 2

anyOf variant 2.

- Value shape: null. Whether this item requires fulfillment. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.quantity_per_line_item_unit

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.quantity_per_line_item_unit variant 1

anyOf variant 1: Number of this component per unit of the order line item; fractional quantities are not supported..

- Value shape: integer. Number of this component per unit of the order line item; fractional quantities are not supported. Number of this component per unit of the order line item; fractional quantities are not supported. Format: `int64`. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.quantity_per_line_item_unit variant 2

anyOf variant 2.

- Value shape: null. Number of this component per unit of the order line item; fractional quantities are not supported. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.direct

Fulfillment requirements for a single item. Present for non-bundle lines.

Field definitions: [shared fields](#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1profile).

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.direct variant 1

anyOf OrderLineItemFulfillmentProfilePreviousAttributes.

- Optional: `allowed_types`, `requirement`.

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.direct variant 2

anyOf variant 2.

- Undeclared: `allowed_types`, `requirement`.
- Value shape: null. Fulfillment requirements for a single item. Present for non-bundle lines. 

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.direct variant 1.allowed_types

Declared alternatives: [OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.allowed_types](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1profile-variant-1allowed_types).

### OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.direct variant 1.requirement

Declared alternatives: [OrderLineItemPreviousAttributes.fulfillment_requirements variant 1.components variant 1.[] fields 1.profile variant 1.requirement](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements-variant-1components-variant-1-fields-1profile-variant-1requirement).

### OrderLineItemPreviousAttributes.gift_card_purchase

Gift card details for a gift card purchase line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | Alternative shapes (see declared variants) | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. `configuration`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1configuration). |
| `consideration_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `face_value_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `recipient` | Conditional | Alternative shapes (see declared variants) | Who receives the gift card. `null` when no recipient was set. `recipient`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1recipient). |
| `reference_price_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1

anyOf GiftCardPurchaseSnapshotPreviousAttributes.

- Optional: `configuration`, `consideration_money`, `face_value_money`, `recipient`, `reference_price_money`.

### OrderLineItemPreviousAttributes.gift_card_purchase variant 2

anyOf variant 2.

- Undeclared: `configuration`, `consideration_money`, `face_value_money`, `recipient`, `reference_price_money`.
- Value shape: null. Gift card details for a gift card purchase line. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration

The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Conditional | Alternative shapes (see declared variants) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. `custom_amount_bounds`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1configuration-variant-1custom_amount_bounds). |
| `face_value_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `price_mode` | Conditional | string or null | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. `price_mode`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1configuration-variant-1price_mode). |

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1

anyOf GiftCardProductConfigurationPreviousAttributes.

- Optional: `custom_amount_bounds`, `face_value_money`, `price_mode`.

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 2

anyOf variant 2.

- Undeclared: `custom_amount_bounds`, `face_value_money`, `price_mode`.
- Value shape: null. The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.custom_amount_bounds

Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `minimum_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.custom_amount_bounds variant 1

anyOf GiftCardCustomAmountBoundsPreviousAttributes.

- Optional: `maximum_money`, `minimum_money`.

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.custom_amount_bounds variant 2

anyOf variant 2.

- Undeclared: `maximum_money`, `minimum_money`.
- Value shape: null. Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.price_mode

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.price_mode variant 1

anyOf variant 1: Whether the gift card is sold at its face value or at a discounted price..

- Value shape: string. Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`.

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.configuration variant 1.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the gift card is sold at its face value or at a discounted price. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient

Who receives the gift card. `null` when no recipient was set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | Email address the gift card is delivered to. `email`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1recipient-variant-1email). |
| `message` | Conditional | string or null | Personal message included with the gift card. `message`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1recipient-variant-1message). |
| `name` | Conditional | string or null | Name of the person receiving the gift card. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1recipient-variant-1name). |
| `send_at` | Conditional | string or null | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. `send_at`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase-variant-1recipient-variant-1send_at). |

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1

anyOf GiftCardPurchaseRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`, `send_at`.

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`, `send_at`.
- Value shape: null. Who receives the gift card. `null` when no recipient was set. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.email

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.email variant 1

anyOf variant 1: Email address the gift card is delivered to..

- Value shape: string. Email address the gift card is delivered to. Email address the gift card is delivered to. Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email address the gift card is delivered to. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.message

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.message variant 1

anyOf variant 1: Personal message included with the gift card..

- Value shape: string. Personal message included with the gift card. Personal message included with the gift card. maxLength: `200`. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.message variant 2

anyOf variant 2.

- Value shape: null. Personal message included with the gift card. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.name

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.name variant 1

anyOf variant 1: Name of the person receiving the gift card..

- Value shape: string. Name of the person receiving the gift card. Name of the person receiving the gift card. maxLength: `255`. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the gift card. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.send_at

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.send_at variant 1

anyOf variant 1: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding..

- Value shape: string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderLineItemPreviousAttributes.gift_card_purchase variant 1.recipient variant 1.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. 

### OrderLineItemPreviousAttributes.image

Image of the item as sold.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1image).

### OrderLineItemPreviousAttributes.image variant 1

anyOf ImagePreviousAttributes.

- Optional: `alt`, `height`, `url`, `width`.

### OrderLineItemPreviousAttributes.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `height`, `url`, `width`.
- Value shape: null. Image of the item as sold. 

### OrderLineItemPreviousAttributes.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### OrderLineItemPreviousAttributes.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### OrderLineItemPreviousAttributes.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### OrderLineItemPreviousAttributes.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### OrderLineItemPreviousAttributes.inventory_snapshot

Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Conditional | Array of object or null | The inventory items and quantities each unit of the line item uses. `demands`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot-variant-1demands). |
| `inventory_tracking` | Conditional | string or null | Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot-variant-1inventory_tracking). |

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1

anyOf variant 1: Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line.; anyOf LineItemInventorySnapshotPreviousAttributes.

- Optional: `demands`, `inventory_tracking`.

### OrderLineItemPreviousAttributes.inventory_snapshot variant 2, 3

anyOf variant 1: Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line.; anyOf variant 2; anyOf variant 2.

- Undeclared: `demands`, `inventory_tracking`.
- Value shape: null. Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1

anyOf variant 1: The inventory items and quantities each unit of the line item uses..

- Value shape: Array of object. The inventory items and quantities each unit of the line item uses. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 2

anyOf variant 2.

- Value shape: null. The inventory items and quantities each unit of the line item uses. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. `bundle_component_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot-variant-1demands-variant-1-fields-1bundle_component_id). |
| `component_snapshot_id` | Optional | string or null | Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. `component_snapshot_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot-variant-1demands-variant-1-fields-1component_snapshot_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item each unit of the line item uses. `inventory_item_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot-variant-1demands-variant-1-fields-1inventory_item_id). |
| `quantity_per_line_item_unit` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.bundle_component_id

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this demand comes from. Present only on a line item that sells a bundle..

- Value shape: string. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.component_snapshot_id

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.component_snapshot_id variant 1

anyOf variant 1: Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`..

- Value shape: string. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Example: `"component-1842"`. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.component_snapshot_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.inventory_item_id

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item each unit of the line item uses..

- Value shape: string. ID of the inventory item each unit of the line item uses. ID of the inventory item each unit of the line item uses. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item each unit of the line item uses. 

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.demands variant 1.[] fields 1.quantity_per_line_item_unit

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.inventory_tracking

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.inventory_tracking variant 1

anyOf variant 1: Whether the line item draws on tracked stock..

- Value shape: string. Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`.

### OrderLineItemPreviousAttributes.inventory_snapshot variant 1.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether the line item draws on tracked stock. 

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

- Value shape: (string or null). The edit that added this line. Null when the line was not added by an order edit. 

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

- Value shape: (string or null). The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: `1`. maxLength: `100`. 

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

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1product_type).

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
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4). |
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

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.last4](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4).

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

- Value shape: (string or null). Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. 

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
| `billing_interval` | Conditional | string or null | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription-variant-1billing_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of billing_interval units between charges, from 1 to 365. `billing_interval_count`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription-variant-1billing_interval_count). |
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

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval variant 1

anyOf variant 1: Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options..

- Value shape: string. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. 

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval_count

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval_count variant 1

anyOf variant 1: Number of billing_interval units between charges, from 1 to 365..

- Value shape: integer. Number of billing_interval units between charges, from 1 to 365. Number of billing_interval units between charges, from 1 to 365. Format: `int32`. 

### OrderLineItemPreviousAttributes.subscription variant 1.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing_interval units between charges, from 1 to 365. 

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
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. `billing_interval_options`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer-variant-1billing_interval_options). |
| `discount` | Conditional | Alternative shapes (see declared variants) | The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. `discount`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer-variant-1discount). |
| `name` | Conditional | string or null | Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer-variant-1name). |
| `subscription_offer_id` | Conditional | string or null | ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. `subscription_offer_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer-variant-1subscription_offer_id). |

### OrderLineItemPreviousAttributes.subscription_offer variant 1

anyOf OrderLineSubscriptionOfferSummaryPreviousAttributes.

- Optional: `billing_interval_options`, `discount`, `name`, `subscription_offer_id`.

### OrderLineItemPreviousAttributes.subscription_offer variant 2

anyOf variant 2.

- Undeclared: `billing_interval_options`, `discount`, `name`, `subscription_offer_id`.
- Value shape: null. Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.billing_interval_options

### OrderLineItemPreviousAttributes.subscription_offer variant 1.billing_interval_options variant 1

anyOf variant 1: Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.discount

The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. |
| `percent_off` | Conditional | number or null | Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. `percent_off`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer-variant-1discount-variant-1percent_off). |

### OrderLineItemPreviousAttributes.subscription_offer variant 1.discount variant 1

anyOf OrderLineSubscriptionOfferDiscountPreviousAttributes.

- Optional: `amount_off_money`, `percent_off`.

### OrderLineItemPreviousAttributes.subscription_offer variant 1.discount variant 2

anyOf variant 2.

- Undeclared: `amount_off_money`, `percent_off`.
- Value shape: null. The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.discount variant 1.percent_off

### OrderLineItemPreviousAttributes.subscription_offer variant 1.discount variant 1.percent_off variant 1

anyOf variant 1: Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount..

- Value shape: number. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: `0.0001`. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.discount variant 1.percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.name

### OrderLineItemPreviousAttributes.subscription_offer variant 1.name variant 1

anyOf variant 1: Name of the offer. On a subscribed line it is the name frozen when the buyer signed up..

- Value shape: string. Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.subscription_offer_id

### OrderLineItemPreviousAttributes.subscription_offer variant 1.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose..

- Value shape: string. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### OrderLineItemPreviousAttributes.subscription_offer variant 1.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. 

### OrderLineItemPreviousAttributes.tax

How tax was calculated for this line item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | Alternative shapes (see declared variants) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. `calculation`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestax-variant-1calculation). |
| `line_item_tax_category` | Conditional | string or null | Flint line-item tax category. Values: [12 declared values](#orderlineitempreviousattributestax-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category). |
| `taxable` | Conditional | boolean or null | Whether the line item is subject to tax. `taxable`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestax-variant-1taxable). |

#### OrderLineItemPreviousAttributes.tax line_item_tax_category values

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

### OrderLineItemPreviousAttributes.tax variant 1

anyOf OrderCalculatedLineItemTaxPreviousAttributes.

- Optional: `calculation`, `line_item_tax_category`, `taxable`.

### OrderLineItemPreviousAttributes.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `line_item_tax_category`, `taxable`.
- Value shape: null. How tax was calculated for this line item. 

### OrderLineItemPreviousAttributes.tax variant 1.calculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation).

### OrderLineItemPreviousAttributes.tax variant 1.calculation variant 1

anyOf TaxCalculationRequestPreviousAttributes.

- Optional: `components`, `price_mode`.

### OrderLineItemPreviousAttributes.tax variant 1.calculation variant 2

anyOf variant 2.

- Undeclared: `components`, `price_mode`.
- Value shape: null. The tax you supply for this line item. Used when the order's tax `mode` is `external`. 

### OrderLineItemPreviousAttributes.tax variant 1.calculation variant 1.components

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components).

### OrderLineItemPreviousAttributes.tax variant 1.calculation variant 1.price_mode

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.price_mode](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1price_mode).

### OrderLineItemPreviousAttributes.tax variant 1.line_item_tax_category

Declared alternatives: [ModifierPreviousAttributes.line_item_tax_category](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category).

### OrderLineItemPreviousAttributes.tax variant 1.taxable

### OrderLineItemPreviousAttributes.tax variant 1.taxable variant 1

anyOf variant 1: Whether the line item is subject to tax..

- Value shape: boolean. Whether the line item is subject to tax. 

### OrderLineItemPreviousAttributes.tax variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the line item is subject to tax. 

### OrderLineItemPreviousAttributes.type

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type).

### OrderLineItemPreviousAttributes.unit_dimensions

Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `height` | Conditional | number or null | Distance along this dimension, in the specified unit. `height`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height). |
| `length` | Conditional | number or null | Distance along this dimension, in the specified unit. `length`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height). |
| `unit` | Conditional | string or null | Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`. `unit`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1unit). |
| `width` | Conditional | number or null | Distance along this dimension, in the specified unit. `width`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height). |

### OrderLineItemPreviousAttributes.unit_dimensions variant 1

anyOf DimensionsPreviousAttributes.

- Optional: `height`, `length`, `unit`, `width`.

### OrderLineItemPreviousAttributes.unit_dimensions variant 2

anyOf variant 2.

- Undeclared: `height`, `length`, `unit`, `width`.
- Value shape: null. Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. 

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.height

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.height variant 1

anyOf variant 1: Distance along this dimension, in the specified unit..

- Value shape: number. Distance along this dimension, in the specified unit. Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. 

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.height variant 2

anyOf variant 2.

- Value shape: null. Distance along this dimension, in the specified unit. 

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.length

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions variant 1.height](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height).

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.unit

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.unit variant 1

anyOf variant 1: Length unit for length, width, and height. Use millimeter, centimeter, or inch..

- Value shape: string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`.

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.unit variant 2

anyOf variant 2.

- Value shape: null. Length unit for length, width, and height. Use millimeter, centimeter, or inch. 

### OrderLineItemPreviousAttributes.unit_dimensions variant 1.width

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions variant 1.height](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions-variant-1height).

### OrderLineItemPreviousAttributes.unit_weight

Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Conditional | string or null | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight-variant-1unit). |
| `value` | Conditional | number or null | Weight measured in the specified unit. `value`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight-variant-1value). |

### OrderLineItemPreviousAttributes.unit_weight variant 1

anyOf WeightPreviousAttributes.

- Optional: `unit`, `value`.

### OrderLineItemPreviousAttributes.unit_weight variant 2

anyOf variant 2.

- Undeclared: `unit`, `value`.
- Value shape: null. Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. 

### OrderLineItemPreviousAttributes.unit_weight variant 1.unit

### OrderLineItemPreviousAttributes.unit_weight variant 1.unit variant 1

anyOf variant 1: Weight unit. Use gram, kilogram, ounce, or pound..

- Value shape: string. Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### OrderLineItemPreviousAttributes.unit_weight variant 1.unit variant 2

anyOf variant 2.

- Value shape: null. Weight unit. Use gram, kilogram, ounce, or pound. 

### OrderLineItemPreviousAttributes.unit_weight variant 1.value

### OrderLineItemPreviousAttributes.unit_weight variant 1.value variant 1

anyOf variant 1: Weight measured in the specified unit..

- Value shape: number. Weight measured in the specified unit. Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. 

### OrderLineItemPreviousAttributes.unit_weight variant 1.value variant 2

anyOf variant 2.

- Value shape: null. Weight measured in the specified unit. 

### OrderLineItemPreviousAttributes.variant_id

### OrderLineItemPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the catalog variant the item was sold from..

- Value shape: string. ID of the catalog variant the item was sold from. 

### OrderLineItemPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the item was sold from. 

