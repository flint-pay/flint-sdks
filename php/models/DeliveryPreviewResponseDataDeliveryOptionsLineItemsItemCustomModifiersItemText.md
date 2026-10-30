[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomModifiersItemText

The `text` variant of `OrderLineItemModifierInput`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantmodifiersitemcatalogmetadata). |
| `modifier_id` | Optional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Required | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomModifiersItemTextText](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomModifiersItemTextText.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustommodifiersitemtexttext) | Text a buyer entered for a text modifier group on an order line item. |
| `type` | Required | string | Selects the type branch. Values: `"text"`. |

### DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomModifiersItemText.metadata

Field definitions: [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog.metadata](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantmodifiersitemcatalogmetadata).

