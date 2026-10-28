[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

The `variant` variant of `CreateOrderLineItem`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillment](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillment.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantfulfillment) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantfulfillment-fields-1). |
| `gift_card_purchase` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantgiftcardpurchase) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantgift_card_purchase). |
| `image` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantImage](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantImage.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantimage) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of ([DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantinventorydemandsitem) and object) |  |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata). |
| `modifiers` | Optional | Array of (object and Alternative shapes (see declared variants)) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. |
| `name` | Optional | string |  |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantsubscription) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttax) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttax-fields-1). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`. |
| `unit_dimensions` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantunitdimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitPriceMoney](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitPriceMoney.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantunitweight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Required | string |  |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.fulfillment fields 1

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

Field definitions: [shared fields](DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsfulfillment).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.fulfillment fields 1.origin_policy

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[].fulfillment.origin_policy](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsfulfillmentorigin_policy).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Field definitions: [shared fields](DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsgift_card_purchase).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.gift_card_purchase.face_value_money

Field definitions: [GiftCardPurchaseSnapshotConsiderationMoney](../models/GiftCardPurchaseSnapshotConsiderationMoney.md#giftcardpurchasesnapshotconsiderationmoney).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.metadata

Field definitions: [ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.metadata](../models/ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItem.md#expandedsubscriptionplansummarylineitemsitemvariantmodifiersitemmetadata).

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.tax fields 1

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvarianttax-fields-1-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.tax fields 1 line_item_tax_category values

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

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant.tax fields 1.calculation

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation).

