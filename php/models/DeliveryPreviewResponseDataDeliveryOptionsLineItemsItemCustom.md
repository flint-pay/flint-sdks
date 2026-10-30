[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

The `custom` variant of `CreateOrderLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Required | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomFulfillment](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomFulfillment.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomfulfillment) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomfulfillment-fields-1). |
| `gift_card_purchase` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchase](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchase.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomgiftcardpurchase) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomgift_card_purchase). |
| `image` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomImage](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomImage.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomimage) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of ([DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomInventoryDemandsItem](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomInventoryDemandsItem.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustominventorydemandsitem) and object) |  |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata). |
| `modifiers` | Optional | Array of (object and Alternative shapes (see declared variants)) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. |
| `name` | Required | string |  |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomSubscription](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomSubscription.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomsubscription) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTax.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtax) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtax-fields-1). |
| `type` | Required | string | Selects the type branch. Values: `"custom"`. |
| `unit_dimensions` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomUnitDimensions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomUnitDimensions.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomunitdimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomUnitPriceMoney](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomUnitPriceMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomunitpricemoney) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomUnitWeight](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomUnitWeight.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomunitweight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string |  |

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.fulfillment fields 1

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

Field definitions: [shared fields](DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsfulfillment).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.fulfillment fields 1.origin_policy

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[].fulfillment.origin_policy](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsfulfillmentorigin_policy).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Field definitions: [shared fields](DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchase).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.gift_card_purchase.face_value_money

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[].gift_card_purchase.face_value_money](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchaseface_value_money).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.metadata

Field definitions: [ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.metadata](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata).

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.tax fields 1

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomtax-fields-1-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.tax fields 1 line_item_tax_category values

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

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustom.tax fields 1.calculation

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation).

