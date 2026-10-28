[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalog

The `catalog` variant of `OrderLineItemModifierInput`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantmodifiersitemcatalogmetadata). |
| `modifier_id` | Required | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalogText](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalogText.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemcustommodifiersitemcatalogtext) | Text a buyer entered for a text modifier group on an order line item. |
| `type` | Required | string | Selects the type branch. Values: `"catalog"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalog.metadata

Field definitions: [DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog.metadata](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantmodifiersitemcatalogmetadata).

