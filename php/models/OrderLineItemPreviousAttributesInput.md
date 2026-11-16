[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Optional | integer or null | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbackordered_quantity). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unit price multiplied by quantity, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id). |
| `catalog_pricing` | Optional | [CatalogPricingPreviousAttributesInput](../models/CatalogPricingPreviousAttributesInput.md#catalogpricingpreviousattributesinput) or null | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputcategories). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Discount value allocated to this line item. |
| `expected_ship_date` | Optional | string or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. `expected_ship_date`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputexpected_ship_date). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributesInput](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributesInput.md#orderlineitemfulfillmentquantitiespreviousattributesinput) or null | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputfulfillment_quantities). |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirementsPreviousAttributesInput](../models/OrderLineItemFulfillmentRequirementsPreviousAttributesInput.md#orderlineitemfulfillmentrequirementspreviousattributesinput) or null | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshotPreviousAttributesInput](../models/GiftCardPurchaseSnapshotPreviousAttributesInput.md#giftcardpurchasesnapshotpreviousattributesinput) or null | Gift card details for a gift card purchase line. |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Image of the item as sold. |
| `inventory_snapshot` | Optional | [LineItemInventorySnapshotPreviousAttributesInput](../models/LineItemInventorySnapshotPreviousAttributesInput.md#lineiteminventorysnapshotpreviousattributesinput) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Sum of the line item's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputname). |
| `order_edit_id` | Optional | string or null | The edit that added this line. Null when the line was not added by an order edit. `order_edit_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputorder_edit_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | Unique identifier for this order line item, prefixed `li_`. `order_line_item_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputorder_line_item_id). |
| `payment_link_line_item_key` | Optional | string or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. `payment_link_line_item_key`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputpayment_link_line_item_key). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputproduct_id). |
| `product_type` | Optional | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputproduct_type). |
| `purchased_gift_cards` | Optional | Array of [PurchasedGiftCardPreviousAttributesInput](../models/PurchasedGiftCardPreviousAttributesInput.md#purchasedgiftcardpreviousattributesinput) or null | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputpurchased_gift_cards). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount of this line already refunded. |
| `refunded_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `refunded_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `release_date` | Optional | string or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. `release_date`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputrelease_date). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. `removed_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputremoved_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku). |
| `subscription` | Optional | [SubscribedLinePreviousAttributesInput](../models/SubscribedLinePreviousAttributesInput.md#subscribedlinepreviousattributesinput) or null | Recurring offer and cadence frozen for this line at signup. |
| `subscription_id` | Optional | string or null | Subscription created for this line after the order is paid. `subscription_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsubscription_id). |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummaryPreviousAttributesInput](../models/OrderLineSubscriptionOfferSummaryPreviousAttributesInput.md#orderlinesubscriptionoffersummarypreviousattributesinput) or null | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Base subtotal plus modifier total, before discounts and tax. |
| `tax` | Optional | [OrderCalculatedLineItemTaxPreviousAttributesInput](../models/OrderCalculatedLineItemTaxPreviousAttributesInput.md#ordercalculatedlineitemtaxpreviousattributesinput) or null | How tax was calculated for this line item. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax calculated for this line item, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Subtotal minus discounts, plus tax that is not already included in the price. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputtype). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributesInput](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinput) or null | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit before modifiers, discounts, and tax. |
| `unit_weight` | Optional | [WeightPreviousAttributesInput](../models/WeightPreviousAttributesInput.md#weightpreviousattributesinput) or null | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputvariant_id). |

### OrderLineItemPreviousAttributesInput.backordered_quantity

### OrderLineItemPreviousAttributesInput.backordered_quantity variant 1

anyOf variant 1: Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. 

### OrderLineItemPreviousAttributesInput.backordered_quantity variant 2

anyOf variant 2.

- Value shape: null. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. 

### OrderLineItemPreviousAttributesInput.bundle_components

### OrderLineItemPreviousAttributesInput.bundle_components variant 1

anyOf variant 1: Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category..

- Value shape: Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput). Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. 

### OrderLineItemPreviousAttributesInput.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. 

### OrderLineItemPreviousAttributesInput.bundle_id

### OrderLineItemPreviousAttributesInput.bundle_id variant 1

anyOf variant 1: ID of the bundle the line was sold from..

- Value shape: string. ID of the bundle the line was sold from. ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### OrderLineItemPreviousAttributesInput.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the line was sold from. 

### OrderLineItemPreviousAttributesInput.categories

### OrderLineItemPreviousAttributesInput.categories variant 1

anyOf variant 1: Catalog categories of the item..

- Value shape: Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput). Catalog categories of the item. 

### OrderLineItemPreviousAttributesInput.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the item. 

### OrderLineItemPreviousAttributesInput.description

### OrderLineItemPreviousAttributesInput.description variant 1

anyOf variant 1: Description of the item as sold..

- Value shape: string. Description of the item as sold. 

### OrderLineItemPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Description of the item as sold. 

### OrderLineItemPreviousAttributesInput.expected_ship_date

### OrderLineItemPreviousAttributesInput.expected_ship_date variant 1

anyOf variant 1: Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted..

- Value shape: string. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderLineItemPreviousAttributesInput.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. 

### OrderLineItemPreviousAttributesInput.fulfillment_quantities

### OrderLineItemPreviousAttributesInput.fulfillment_quantities variant 1

anyOf variant 1: Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements..

- Value shape: Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributesInput](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributesInput.md#orderlineitemfulfillmentquantitiespreviousattributesinput). Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. 

### OrderLineItemPreviousAttributesInput.fulfillment_quantities variant 2

anyOf variant 2.

- Value shape: null. Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. 

### OrderLineItemPreviousAttributesInput.modifiers

### OrderLineItemPreviousAttributesInput.modifiers variant 1

anyOf variant 1: Modifiers selected on the line, with their prices..

- Value shape: Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput). Modifiers selected on the line, with their prices. 

### OrderLineItemPreviousAttributesInput.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers selected on the line, with their prices. 

### OrderLineItemPreviousAttributesInput.name

### OrderLineItemPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the item as sold..

- Value shape: string. Name of the item as sold. 

### OrderLineItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the item as sold. 

### OrderLineItemPreviousAttributesInput.order_edit_id

### OrderLineItemPreviousAttributesInput.order_edit_id variant 1

anyOf variant 1: The edit that added this line. Null when the line was not added by an order edit..

- Value shape: string. The edit that added this line. Null when the line was not added by an order edit. The edit that added this line. Null when the line was not added by an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### OrderLineItemPreviousAttributesInput.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The edit that added this line. Null when the line was not added by an order edit. 

### OrderLineItemPreviousAttributesInput.order_id

Declared alternatives: [InventoryReservationLinePreviousAttributesInput.order_id](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputorder_id).

### OrderLineItemPreviousAttributesInput.order_line_item_id

### OrderLineItemPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: Unique identifier for this order line item, prefixed `li_`..

- Value shape: string. Unique identifier for this order line item, prefixed `li_`. Unique identifier for this order line item, prefixed `li_`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderLineItemPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order line item, prefixed `li_`. 

### OrderLineItemPreviousAttributesInput.payment_link_line_item_key

### OrderLineItemPreviousAttributesInput.payment_link_line_item_key variant 1

anyOf variant 1: The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link..

- Value shape: string. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: `1`. maxLength: `100`. 

### OrderLineItemPreviousAttributesInput.payment_link_line_item_key variant 2

anyOf variant 2.

- Value shape: null. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. 

### OrderLineItemPreviousAttributesInput.product_id

### OrderLineItemPreviousAttributesInput.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderLineItemPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### OrderLineItemPreviousAttributesInput.product_type

Declared alternatives: [InvoiceLineItemPreviousAttributesInput.product_type](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputproduct_type).

### OrderLineItemPreviousAttributesInput.purchased_gift_cards

### OrderLineItemPreviousAttributesInput.purchased_gift_cards variant 1

anyOf variant 1: Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card..

- Value shape: Array of [PurchasedGiftCardPreviousAttributesInput](../models/PurchasedGiftCardPreviousAttributesInput.md#purchasedgiftcardpreviousattributesinput). Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. 

### OrderLineItemPreviousAttributesInput.purchased_gift_cards variant 2

anyOf variant 2.

- Value shape: null. Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. 

### OrderLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### OrderLineItemPreviousAttributesInput.refunded_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### OrderLineItemPreviousAttributesInput.release_date

### OrderLineItemPreviousAttributesInput.release_date variant 1

anyOf variant 1: Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted..

- Value shape: string. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderLineItemPreviousAttributesInput.release_date variant 2

anyOf variant 2.

- Value shape: null. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. 

### OrderLineItemPreviousAttributesInput.removed_quantity

### OrderLineItemPreviousAttributesInput.removed_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Format: `int64`. 

### OrderLineItemPreviousAttributesInput.removed_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. 

### OrderLineItemPreviousAttributesInput.selected_options

### OrderLineItemPreviousAttributesInput.selected_options variant 1

anyOf variant 1: Variant options selected for the item, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput). Variant options selected for the item, such as size and color. 

### OrderLineItemPreviousAttributesInput.selected_options variant 2

anyOf variant 2.

- Value shape: null. Variant options selected for the item, such as size and color. 

### OrderLineItemPreviousAttributesInput.sku

### OrderLineItemPreviousAttributesInput.sku variant 1

anyOf variant 1: SKU of the item as sold..

- Value shape: string. SKU of the item as sold. 

### OrderLineItemPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the item as sold. 

### OrderLineItemPreviousAttributesInput.subscription_id

### OrderLineItemPreviousAttributesInput.subscription_id variant 1

anyOf variant 1: Subscription created for this line after the order is paid..

- Value shape: string. Subscription created for this line after the order is paid. Subscription created for this line after the order is paid. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### OrderLineItemPreviousAttributesInput.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription created for this line after the order is paid. 

### OrderLineItemPreviousAttributesInput.type

Declared alternatives: [InvoiceLineItemPreviousAttributesInput.type](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputtype).

### OrderLineItemPreviousAttributesInput.variant_id

### OrderLineItemPreviousAttributesInput.variant_id variant 1

anyOf variant 1: ID of the catalog variant the item was sold from..

- Value shape: string. ID of the catalog variant the item was sold from. ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderLineItemPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the item was sold from. 

