[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

The `custom` variant of `CreateOrderLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomFulfillment](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomFulfillment.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomfulfillment) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomfulfillment-fields-1). |
| `gift_card_purchase` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchase](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchase.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomgiftcardpurchase) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomgift_card_purchase). |
| `image` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomImage](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomImage.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomimage) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of ([DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomInventoryDemandsItem](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomInventoryDemandsItem.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustominventorydemandsitem) and object) |  |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata). |
| `modifiers` | Optional | Array of (object and Alternative shapes (see declared variants)) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. |
| `name` | Required | string |  |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomSubscription](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomSubscription.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomsubscription) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtax) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtax-fields-1). |
| `type` | Required | string | Selects the type branch. Values: `"custom"`. |
| `unit_dimensions` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomUnitDimensions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomUnitDimensions.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomunitdimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomUnitPriceMoney](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomUnitPriceMoney.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomUnitWeight](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomUnitWeight.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomunitweight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string |  |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.fulfillment fields 1

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

Field definitions: [shared fields](DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsfulfillment).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.fulfillment fields 1.origin_policy

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[].fulfillment.origin_policy](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsfulfillmentorigin_policy).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Field definitions: [shared fields](DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsgift_card_purchase).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.gift_card_purchase.face_value_money

Field definitions: [GiftCardPurchaseSnapshotConsiderationMoney](../models/GiftCardPurchaseSnapshotConsiderationMoney.md#giftcardpurchasesnapshotconsiderationmoney).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.metadata

Field definitions: [ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.metadata](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.tax fields 1

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustomtax-fields-1-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.tax fields 1 line_item_tax_category values

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

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustom.tax fields 1.calculation

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation).

