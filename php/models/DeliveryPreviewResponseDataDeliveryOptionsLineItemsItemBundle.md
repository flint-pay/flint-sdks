[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

The `bundle` variant of `CreateOrderLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. |
| `description` | Optional | string | Description of the item as it appears on the order. |
| `fulfillment` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlefulfillment) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlefulfillment-fields-1). |
| `gift_card_purchase` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlegiftcardpurchase) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlegift_card_purchase). |
| `image` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleImage](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleImage.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundleimage) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of ([DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleInventoryDemandsItem](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleInventoryDemandsItem.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundleinventorydemandsitem) and object) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata). |
| `modifiers` | Optional | Array of (object and Alternative shapes (see declared variants)) | Modifiers sold with the item, each chosen from the catalog or typed as text. Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. |
| `name` | Optional | string | Name of the item as it appears on the order. |
| `product_id` | Optional | string | Parent product of variant_id, resolved by the preview. Required for variant lines; absent on bundle and custom lines, which have no parent product. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleSubscription](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleSubscription.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlesubscription) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. `subscription`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundlesubscription-fields-1). |
| `tax` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletax) | How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletax-fields-1). |
| `type` | Required | string | Selects the type branch. Values: `"bundle"`. |
| `unit_dimensions` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitDimensions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitDimensions.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundleunitdimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitPriceMoney](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitPriceMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundleunitpricemoney) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight.md#deliverypreviewresponsedatadeliveryoptionslineitemsitembundleunitweight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. |

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.fulfillment fields 1

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

Field definitions: [shared fields](DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsfulfillment).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.fulfillment fields 1.origin_policy

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[].fulfillment.origin_policy](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsfulfillmentorigin_policy).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Field definitions: [shared fields](DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchase).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.gift_card_purchase.recipient

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[].gift_card_purchase.recipient](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchaserecipient).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.metadata

Field definitions: [ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.metadata](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.subscription fields 1

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.

Field definitions: [shared fields](SubscribedLineRequestInput.md#subscribedlinerequestinput).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.tax fields 1

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewresponsedatadeliveryoptionslineitemsitembundletax-fields-1-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.tax fields 1 line_item_tax_category values

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

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle.tax fields 1.calculation

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation).

